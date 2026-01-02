/**
*  nps Project (2024)
*  @FileName 	Popup.js 
*  @Creator 	gamsin
*  @CreateDate 	2024.08.08
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2024.08.08     		gamsin					최초 생성    
*******************************************************************************
 ● gfnGetArgPopup			: 팝업으로 전달된 argument값 반환
 ● gfnModal				 	: Modal 팝업
 ● gfnModeless			 	: Modeless 팝업
 ● gfnCloseModalessPopup	: Modeless 팝업닫기
 ● gfnAlert					: 공통 Alert
 ● gfnConfirm				: 공통 Confirm
 
*/

var pForm  = nexacro.Form.prototype;

pForm._gfv_openPopup = null;

/**
 * @class  팝업으로 전달된 argument값 반환 <br>
 *         전달값은 "this.parent.[변수명]" 또는 "this.getOwnerFrame().[변수명]" 형태로 사용
 * @param  {Object} pThis - Form 객체
 * @param  {String | Array} arg - argument명 또는 argument명 배열
 * @return {Object} argument값
 * @example
 *  this.gfnGetArgPopup("arg1");
 */
pForm.gfnGetArgPopup = function(pThis, arg)
{
	if(!pThis.getOwnerFrame()) return;
	if (this.gfnIsNull(arg)) return;
	
	if (arg instanceof Array) { // 배열인 경우
		var json = {};
		
		for (var i = 0; i < arg.length; i++) {
			json[arg[i]] = pThis.getOwnerFrame()[arg[i]];
		}
		return json;
	} else {
	
		return pThis.getOwnerFrame()[arg];
	}
};


/**
 * @class  Modal 팝업 <br>
 * @param  {Object} pThis - Form 객체
 * @param  {Object} option - JSON 객체
 *					{String} popupId  - 팝업ID (FormId : 팝업ID 및 Callback함수에서 구분ID로 사용)
 *					{String} url      - 팝업 URL
 *					{String} title    - 팝업 title
 *					{String} arg      - 팝업 전달값
 *					{String} callback - Callback 함수명
 * @return N/A
 */
pForm.gfnModal = function(pThis, option)
{
	// 1. 변수선언
	var popupId 		= option.popupId;
    var url 			= option.url;
    var title 			= option.title;
	var type      		= option.type;	
    var arg 			= option.arg;
	var resizable		= this.gfnNvl(option.resizable, false);
	var openalign 		= "center middle";
    var callback 		= option.callback;	
	var showTitle		= true;
	
	// 경고창, 확인창
	if( url.indexOf("comm::") > -1 ) {
		showTitle = false;
	} 	

	
	
	var objFrame = new ChildFrame();
	var objParentFrame = pThis.getOwnerFrame();

	objFrame.init(popupId, 0, 0, 0, 0 );
	objFrame.set_formurl(url);
	objFrame.set_resizable(resizable);
	objFrame.set_openalign(openalign);	
	objFrame.set_autosize(true);	
	objFrame.set_titlebarheight(50);	
	objFrame.set_showtitlebar(showTitle); 	
	
	var vRtn = objFrame.showModal( objParentFrame, arg, this, callback );
	return true;
};

/**
 * @class  Modeless 팝업 <br>
 * @param  {Object} pThis - Form 객체
 * @param  {Object} option - JSON 객체
 *					{String} id       		- 팝업ID (FormId : 팝업ID 및 Callback함수에서 구분ID로 사용)
 *					{String} url      		- 팝업 URL
 *					{String} title    		- 팝업 title
 *					{Number} width    		- 팝업 너비
 *					{Number} height   		- 팝업 높이
 *					{String} arg      		- 팝업 전달값
 *					{String} callback 		- Callback 함수명
 * @return N/A
 */
 
pForm.gfnModeless = function(pThis, option)
{
	// 1. 변수선언
	var popupId 	= option.popupId;
    var url 		= option.url;
    var title 		= option.title;
    var width 		= option.width;
    var height 		= option.height;
	var type 		= option.type;
    var arg 		= option.arg;
    var callback 	= option.callback;
	var showTitle   = this.gfnNvl(option.showTitle, true);	
	var objApp      = nexacro.getApplication();

	
	if (this.gfnIsNull(popupId)) return false;
	if (this.gfnIsNull(url)) return false;

	//callback = this.gfnNvl(callback, "fn_callbackPopup");

	// 4. 너비, 높이
	var left 	= 0;
	var top 	= 0;
	var curX 	= 0;
	var curY 	= 0;	
	
	// 가운데 정렬 시작
	if( system.navigatorname == "nexacro" ) {
		curX = objApp.mainframe.left;
		curY = objApp.mainframe.top;
	} else {
		curX = window.screenLeft;
		curY = window.screenTop;
	}
	
	left = curX + (objApp.mainframe.width / 2) - Math.round(width / 2);
	top  = curY + (objApp.mainframe.height / 2) - Math.round(height / 2);
	// 가운데 정렬 끝
	
	arg["pThis"] 		= pThis;
	arg["url"] 			= url;
	arg["popupType"] 	= "modeless";
	arg["popupId"] 		= popupId;
	arg["callback"] 	= callback;		
	
	
	// 6. 팝업실행	
	var showStatus 		= false;
	var autoSize 		= false;
	var resizable 		= this.gfnNvl(option.resizable		, false);
	var showontaskbar 	= this.gfnNvl(option.showontaskbar	, true);
	
	var openStyle= "showtitlebar=" 		+ showTitle
				  + " showstatusbar=" 	+ showStatus
				  + " showontaskbar=" 	+ showontaskbar
				  + " showcascadetitletext=false"
				  + " showtitleicon=false"
				  + " autosize=" 		+ autoSize
				  + " resizable=" 		+ resizable
				  + " titlebarheight=50"
				  + " titletext='" 		+ title + "'";
				  
				  
	
	var objParentFrame = pThis.getOwnerFrame();		
	//objFrame.set_border("2px solid #999999, 2px solid #999999, 2px solid #999999, 2px solid #999999");	
	nexacro.open(popupId, url, objParentFrame, arg, openStyle, left, top, width, height, pThis);	
	return true;
};

/**
 * @class  Modeless 팝업 닫기 <br>
 * @param  {Object} pThis - Form 객체
 * @return N/A
 */
pForm.gfnCloseModalessPopup = function (pThis, popid, callback, oRet)
{
	// 팝업창 닫기
	var objChild = this.getOwnerFrame();
	if( !this.gfnIsNull(callback) ) {			
		pThis[callback].call(pThis, popid, JSON.stringify(oRet));			
	}
	
	objChild.form.close();	
}






/******************************** Alert, Confirm Start ********************************/
/**
 * @class  Confirm창을 사용하기 위한 공통함수 <br>
 * @param  {JSon} jsonParam
				  msg		- (필수)메세지 코드 or 메세지
				  arrParam	- (옵션)메세지 코드를 사용할 경우 치환 값
				  callback  - (옵션)콜백 필요할 경우 명시할 것				  
 * @return N/A
 */
pForm.gfnConfirm = function(jsonParam) 
{
	var system 	= this.gfnNvl(jsonParam.system, false);
	var option  = this._gfnGetMsg(jsonParam);
	option.type  	= "confirm";
	option.oThis 	= this;	
	option.callback = jsonParam.callback;	
	
	if(system ) {
		var msg = option.msg;
		return this.confirm(msg);	
	}
	else {
		this._gfn_msgPopup(option);	
	}
};



/**
 * @class  알림창을 사용하기 위한 공통함수 <br>
 * @param  {JSon} option
				  msg		- (필수)메세지 코드 or 메세지
				  arrParam	- (옵션)메세지 코드를 사용할 경우 치환 값
				  callback  - (옵션)콜백 필요할 경우 명시할 것				  
 * @return N/A
 * @example : ZZ01Sample019 참고
 */
pForm.gfnAlert = function(jsonParam) 
{
	var system 	= this.gfnNvl(jsonParam.system, false);
	var option  = this._gfnGetMsg(jsonParam);
	
	option.type = "alert";
	option.oThis = this;
	if(system) {
		var msg = option.msg;
		this.alert(msg);
	}
	else {
		this._gfn_msgPopup(option);
	}
};

// Alert, Confirm에 사용할 메세지
pForm._gfnGetMsg = function(jsonParam)
{
	var sMsgCd   = jsonParam.msg;
	var arrParam = jsonParam.arrParam;
	var sMsg = this.gfnNvl(nexacro.getApplication().gdsMessage.lookup(CONST_MSG_CODE, sMsgCd, CONST_MSG_DATA), sMsgCd);	
	
	if( !this.gfnIsNull(arrParam) && arrParam.length ) {
		for( var i=0, cnt=arrParam.length; i<cnt; i++ ) {
			sMsg = sMsg.replace("\{"+i+"\}", arrParam[i]);
		}
	}	
	
	jsonParam.msg   = sMsg;
	return jsonParam;
};

// Alert창, Confirm창 출력
pForm._gfn_msgPopup = function(option)
{
	var oThis     = option.oThis;
	var type      = option.type;
	var msg       = option.msg;
	var width	  = this.gfnNvl(option.width, 320);
	var height	  = this.gfnNvl(option.height, 135);
	var pCallback = option.callback;	
	
	this.gfnModal(this, {
		popupId  : "commAlert"+ "_" + parseInt(new nexacro.Date()), 
		url      : "comm::commAlert.xfdl", 
		title    : "", 
		width    : width, 
		height   : height, 
		arg      : {
			type: type,
			msg: msg
		}, 
		callback : function(popupId, retVal) {
		
			if( typeof(pCallback) == "function" ){
				pCallback.call(oThis, retVal);
			}
		}
	});	
};



/**
 * @class  팝업 close
 * @param  {String} Form에 전달할 값
 * @return {String} Form 전달값
 * @example
 */
pForm.gfnMsgPopupClose = function(jsonParam)
{
	// 메시지 팝업창 닫기
	var objChild = this.getOwnerFrame();	
	
	trace(jsonParam.pThis);
	trace(jsonParam.callback);
	trace(jsonParam.popId);
	trace(jsonParam.retVal);
	
	if( !this.gfnIsNull(jsonParam) ) {		
		var pThis = jsonParam.pThis;
		var callback = jsonParam.callback;
		
		trace("gfnMsgPopupClose ::::::" + callback);
		
		var popId = jsonParam.popId;
		var retVal = jsonParam.retVal;		
		// Dataset Return 방식
		if( !this.gfnIsNull(callback) ) {			
		
			trace("callback 있음~~~~~~~~~~~~~~~~~~~");
		
			// 콜백 함수 실행
			if( typeof callback == "function" ) {				
				callback.call(pThis, popId, retVal);
			}
			//callback in string 일경우
			else if(typeof callback == "string") {
				pThis[callback].call(pThis, popId, retVal);				
			}			
		}
		
		jsonParam.pThis = null;
		jsonParam.callback = null;
		jsonParam.popId = null;
		jsonParam.retVal = null;
	}
	
	objChild.form.close();
};




/******************************** Alert, Confirm End ********************************/