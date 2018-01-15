/**
 * Created by luo yu shi on 2017/2/24.
 * @flow
 */

'use strict';


import {
    Dimensions,
    Platform,
    PixelRatio
} from 'react-native';


// import Utils from '../Utils/Utils';
// const navigatorHeight = Utils.navigatorHeight();
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

// const PIXEL_RATIO = PixelRatio.get();
// const FONT_BASE_SIZE = PIXEL_RATIO >= 3 ? 16 : 14;
// const FONT_BASE_SIZE_SMALL = PIXEL_RATIO >= 3 ? 14 : 12;
//
// const FONT_FAMILY = 'FZLTHJW--GB1-0';

const styles = {
    PingFangSCMedium: {
        // fontFamily: 'PingFang-SC-Medium'
        fontWeight: Platform.OS === 'android' ? '500' : '600',
    },

    PingFangSCRegular: {
        // fontFamily: 'PingFang-SC-Regular'
        fontWeight: Platform.OS === 'android' ? '300' : '400',
    },

    PingFangSCLight: {
        // fontFamily: 'PingFang-SC-Light'
        fontWeight: Platform.OS === 'android' ? '200' : '300',
    },

    pageStyle: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: '#f5f5f5',//所有背景色背景色背景色背景色背景色背景色
        // marginTop: navigatorHeight,
    },

    get stateHeight(){
        return Platform.OS === 'ios' ? 44 : 0;
    },
    /**
     * 生成base64 img对象
     * @param base64Str
     * @returns {{uri: string}}
     */
    base64Img(base64Str) {
        return {
            uri: `data:image/png;base64,${base64Str}`
        };
    },

    get pixelRatio() {
        return PixelRatio.get();
    },

    get deviceWidth(){
        return deviceWidth;
    },

    get deviceHeight() {
        return deviceHeight;
    },

    /**
     * 解决 iPhone 6s Plus 0.5像素高度的分割线bug
     * @param size
     * @returns {number}
     */
    pixelRatioSize(size) {
        return size * (2 / PixelRatio.get());
    },

    centerContent: {
        alignItems: 'center',
        justifyContent: 'center'
    },


    pixelRatioSizeMax(size) {
        return size * (PixelRatio.get() * 1.2);
    },

    pixelRatioSizeScale(size) {
        const scale = (PixelRatio.get() - 1) / 4 + 1.0;
        return size * scale;
    },

    pixelScaleHeight(size, enable = true) {
        return enable ? Math.round(size * deviceHeight/667) : size;
    },

    pixelScaleWidth(size, enable = true) {
        return enable ? Math.round(size * deviceWidth/375) : size;
    },

    SanFranciscoDisplayLight: {
        fontFamily: 'SFUIDisplay-Light'
    },

    SanFranciscoDisplayMedium: {
        fontFamily: 'SFUIDisplay-Medium'
    },

    SanFranciscoDisplayRegular: {
        fontFamily: 'SFUIDisplay-Regular'
    },

    SanFranciscoDisplaySemibold: {
        fontFamily: 'SFUIDisplay-Semibold'
    },
    
    DINAlternateBold:{
        fontFamily: 'DINAlternate-Bold'
    },
};

module.exports = styles;
