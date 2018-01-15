/**
 * Created by luo yu shi on 2017/5/31.
 * @flow
 */

'use strict';

import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    Dimensions,
} from 'react-native'


import css from './style'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class UITopNoticeDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {

        const topNoticeEntityNoJump = {
            textJump: 0,
            shortContent: '主要公告内容，一般为是系统提示和消息通知主要公告内容，一般为是系统提示和消息通知主要公告内容，一般为是系统提示和消息通知主要公告内容，一般为是系统提示和消息通知',
            backgroundColor: '#FFF7EA',
            fontColor: '#FFB540',
        };

        const topNoticeEntityTextExplain = {
            textJump: 1,
            shortContent: '可以点击的右边按钮的样式，点击右边可跳转可以点击的右边按钮的样式，点击右边可跳转可以点击的右边按钮的样式，点击右边可跳转可以点击的右边按钮的样式，点击右边可跳转',
            backgroundColor: '#FFF7EA',
            fontColor: '#FFB540',

            title: '浮层标题',
            content: '浮层内容，文字很多能够滚动的，测试测试滚动测试测试测试滚动测试测试测试滚动测试测试测试滚动测试测试测试滚动测试测试测试滚动测试测试测试滚动测试。',
            iconStyle: 2,
        };


        const topNoticeEntityTextJump = {
            textJump: 4,
            shortContent: '主要公告内容，一般为是系统提示和消息通知，过长自',
            backgroundColor: '#FFF7EA',
            fontColor: '#FFB540',
            iconStyle: 2,

            jumpType: 5,
            jumpUrl: "10",
            productId: '',
        };

        const topNoticeEntityTextBanner = {
            noticeForm: 2,
            imgUrl: 'http://img12.360buyimg.com/jrpmobile/jfs/t3760/268/2273468671/32833/19d1edde/584a68aeN128e044d.jpg',
            imgX: 1,

            textJump: 1,
            title: '浮层标题',
            content: '浮层内容，文字很多能够滚动的，测试测试滚动测试测试测试滚动测试测试测试滚动测试测试测试滚动测试测试测试滚动测试测试测试滚动测试测试测试滚动测试。',
            shortContent: '文字滚动文字滚动电视剧富士康京东方房贷富家大室父控件2文字滚动文字滚动电视剧富士康京东方房贷富家大室父控件',
            backgroundColor: '#fff',
            fontColor: '#333',
            iconStyle: 2,

            imgJump: {
                jumpType: 5,
                jumpUrl: "10",
                productId: '',
            },
        };

        var buttons = [
            {text:"一般公告样式", topNoticeEntity:topNoticeEntityNoJump},
            {text:"公告+information", topNoticeEntity:topNoticeEntityTextExplain},
            {text:"公告跳转", topNoticeEntity:topNoticeEntityTextJump},
            {text:"Banner公告", topNoticeEntity:topNoticeEntityTextBanner},

        ];

        return (
            <View style={[css.pageStyle, {backgroundColor: '#fff'}]}>
                <View style={{backgroundColor: '#fff', height: 64, paddingHorizontal: 16, justifyContent: 'center'}}>
                    <Text style={[{fontSize: 16, color: '#ccc'}]}>{'DESIGN GUIDELINE'}</Text>
                    <Text style={[{fontSize: 16, color: '#ccc'}]}>{'公告'}</Text>
                </View>
                {
                    buttons.map((button, index)=>{
                        return (
                            <View key={index} style={{justifyContent: 'space-between', backgroundColor: '#fff', paddingTop: 30,}}>
                                <Text style={[{fontSize: 14, color: '#999', paddingLeft: 16,}]}>
                                    {button.text}
                                </Text>
                                
                            </View>
                        );
                    })
                }

            </View>
        );
    }
}