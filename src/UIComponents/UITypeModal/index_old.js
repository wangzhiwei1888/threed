import React from 'react';
import {Button,TouchableOpacity} from 'react-native';
import Utils from 'chameleon-ui/lib/Utils/Utils'

import {
  AppRegistry,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import RecordActionPage from 'chameleon-ui/lib/RecordActionPage';

const {width, height, scale} = Dimensions.get("window"),
	vw = width / 100,
	vh = height / 100;

export default class UITypeModal extends RecordActionPage {

	constructor() {
	    super();
	}
	componentDidMount() {

	}
	
	render(){

		const {
			isOpen,
			mykey,
			onClose,
            sureBtnClick,
			dataList,
			choiceBtnClick
		} = this.props;

		let top = Utils.navigatorHeight();

		return(
			<View style={[this.props.isOpen ? styles.topPanelWarp:'']}>
				{
					this.props.isOpen ?
					<View >
						<View style={[
		                    styles.mask, {
		                        marginTop: top
		                    }
		                ]}></View>
		                <View style={[
		                    styles.wrap, 
		                ]}>
		                    <View style={[styles.topPanel]}> 
		                        <View style={styles.timelabel}>
		                            <Text style={styles.timeTxt}>选择业务线</Text>
		                        </View>
		                        <View style={styles.dataCellWrap}>
		                            {
		                                dataList && dataList.map((item,index)=>{
		                                    return(
		                                        <View style={styles.dataCellContent} key={item.key}>
		                                            <TouchableOpacity 
		                                            style={[
		                                                styles.btnCell,
		                                                item.isHilight?
		                                                styles.hilight
		                                                :''
		                                            ]}
		                                            onPress={
		                                                ()=>{ choiceBtnClick(index,item.key) }
		                                            }
		                                            >
		                                                <Text style={[
		                                                    styles.btnCellText,
		                                                    item.isHilight?
		                                                    styles.hilightText
		                                                    :''
		                                                ]}>{item.cellTitle}</Text>

		                                            </TouchableOpacity>
		                                        </View>
		                                    )
		                                })
		                            }
		                        </View>

		                        <View style={styles.btns}>
		                            <TouchableOpacity style={[styles.btn, styles.btncancel]} onPress={() => {
		                                onClose()
		                            }}>
		                                <Text style={styles.btnTextCancel}>{'取消'}</Text>
		                            </TouchableOpacity>

		                            <TouchableOpacity style={[styles.btn, styles.btnsubmit]} onPress={() => {
		                                sureBtnClick()
		                            }}>
		                                <Text style={styles.btnTextSubmit}>{'确定'}</Text>
		                            </TouchableOpacity>

		                        </View>
		                    </View>
		                </View>
	                </View>
	                :
	                null
				}

			</View>
		)
	}

}


const styles = StyleSheet.create({
	"mask": {
        "backgroundColor": "#000",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "width": 100 * vw,
        "height": 100 * vh,
        "zIndex": 0,
        "opacity":0.3,
    },
    "wrap": {
        "zIndex": 1,
        "position":"absolute",
        "left":0,
        "top":0,
        "width":width,
        "height":height,
        "zIndex":10000003,
    },
    "topPanelWarp":{
		"position":"absolute",
        "left":0,
        "top":0,
        "width":width,
        "height":height,
        "zIndex":10000002,
    },
  	"topPanel":{
        "position":"absolute",
        "left":0,
        "top":0,
        "width":width,
        "backgroundColor":"#fff",
        "height":260,
        "zIndex":10000004,
    },
    "timelabel": {
        "paddingTop": 30,
        "paddingRight": 20,
        "paddingBottom": 14,
        "paddingLeft": 20,
        "flexDirection": "row"
    },
    "timeTxt": {
        "fontSize": 13,
        "color": "#999"
    },
    "dataCellWrap": {
        "backgroundColor": "#fff",
        "display":"flex",
        "flexDirection": "row",
        "flexWrap":"wrap",
        "paddingRight":10,
    },
    "dataCellContent": {
        "marginBottom": 14,
        "marginLeft": 20,
    },
    "btns": {
        "position":"absolute",
        "left":0,
        "bottom":0,
        "width":width,
        "height":60,
        "flexDirection": "row",
        "justifyContent": "space-between",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "backgroundColor":"#fff"
    },
    "btn": {
        "width": 60,
        "height": 40
    },
    "btnTextCancel": {
        "textAlign": "center",
        "lineHeight": 40,
        "color": "#333"
    },
    "btnTextSubmit": {
        "textAlign": "center",
        "lineHeight": 40,
        "color": "#4D7BFE"
    },
    "btnCell": {
        "marginLeft":1,
        "height": 30,
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15,
        "justifyContent": "center",
        "borderRadius": 2,
        "borderWidth": 0.5,
        "borderStyle": "solid",
        "borderColor": "#ddd",
        "backgroundColor": "#fff"
    },
    "btnCellText": {
        "textAlign": "center",
        "fontSize": 14,
        "color": "#666"
    },
    "hilight": {
        "backgroundColor": "#4D7BFE",
        "borderColor": "#4D7BFE"
    },
    "hilightText": {
        "color": "#fff"
    },
    "btncancelBlue":{
        "width":150,
        "marginLeft":10,
        "marginRight":10,
        "height":40,
        "borderWidth": 1,
        "borderRadius":50,
        "borderStyle": "solid",
        "borderColor": "#ddd",
        "backgroundColor": "#fff"
    },
    "btnsubmitBlue":{
        "width":150,
        "marginLeft":10,
        "marginRight":10,
        "height":40,
        "borderRadius":50,
        "borderWidth": 1,
        "borderStyle": "solid",
        "borderColor": "#4D7BFE",
        "backgroundColor": "#4D7BFE",

    },
    "btnTextSubmitWhite":{
        "textAlign": "center",
        "lineHeight": 40,
        "color":"#fff",
    },
    "cancelText":{
        "lineHeight":36,
        "textAlign":"center",
        "backgroundColor":"transparent"
    },
    "sureText":{
        "lineHeight":36,
        "textAlign":"center",
        "color":"#fff",
        "backgroundColor":"transparent"
    }
});