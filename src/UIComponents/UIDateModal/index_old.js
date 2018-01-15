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
import DatePicker from 'rmc-date-picker';
import locale from 'rmc-date-picker/lib/locale/zh_CN';

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
			dataList,
			choiceBtnClick,
            minDate,
            maxDate,
            defaultDate,
            mode,
            onDateChange,
            cancelTimeClick,
            sureTimeClick


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
		                    <View style={[styles.topPanel,styles.height300]}> 
                                
                                <View style={styles.timelabel}>
                                    <Text style={styles.timeTxt}>选择年月</Text>
                                </View>

                                <View>
                                    <DatePicker locale={locale} minDate={minDate} maxDate={maxDate} defaultDate={defaultDate} mode={mode} onDateChange={onDateChange}/>
                                </View>
                                <View style={[styles.btns,styles.btnsBlue]}>
                                    <TouchableOpacity style={[styles.btncancelBlue]} onPress={() => {
                                        cancelTimeClick()
                                    }}>
                                        <Text style={[styles.cancelText]} >{'取消'}</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={[styles.btnsubmitBlue]} onPress={() => {
                                        sureTimeClick()
                                    }}>
                                        <Text style={[styles.sureText]} >{'确定'}</Text>
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
        "height": 1500,
        "zIndex": 0,
        "opacity":0.3,
    },
    "wrap": {
        "zIndex": 1,
        "position":"absolute",
        "left":0,
        "top":0,
        "width":width,
        "zIndex":10000003,
    },
    "topPanelWarp":{
        "position":"absolute",
        "left":0,
        "top":0,
        "width":width,
        "height":1500,
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
    "btnsBlue":{
        "justifyContent": "center",
        
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
        "backgroundColor": "#fff",
        "justifyContent":"center",
        "alignItems":"center"
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
        "justifyContent":"center",
        "alignItems":"center"

    },
    "btnTextSubmitWhite":{
        "textAlign": "center",
        "lineHeight": 40,
        "color":"#fff",
    },
    "cancelText":{
        
        "textAlign":"center",
        "backgroundColor":"transparent"
    },
    "sureText":{
        
        "textAlign":"center",
        "color":"#fff",
        "backgroundColor":"transparent"
    },
    "height300":{
        "height":340
    }
});