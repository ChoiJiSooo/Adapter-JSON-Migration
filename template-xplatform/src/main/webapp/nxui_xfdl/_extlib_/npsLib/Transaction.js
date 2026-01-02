/**
*  nps Project (2024)
*  @FileName 	Transaction.js 
*  @Creator 	gamsin
*  @CreateDate 	2024.08.08
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2024.08.08     		gamsin					최초 생성    
*******************************************************************************
 ● gfnTransaction                     	: 공통 트렌젝션
*/

var pForm  = nexacro.Form.prototype;
pForm._gfv_callback = {};
/**
 * @class  공통 Transaction 함수 <br>
 * @param  {Object} pThis - Form 객체
 * @param  {Object} option - JSON 객체
 *					{String} svcId    	 - 서비스ID
 *					{String} svcUrl   	 - 서비스URL
 *					{String} inDs     	 - 서버전송 Dataset
 *					{String} outDs    	 - 결과회신 Dataset
 *					{String} argument 	 - 단건전송 arguments
 *					{String} callback 	 - Callback 함수명
 *					{Boolean} async   	 - 비동기통신 여부 (true : 비동기, false : 동기) 
 *					{Boolean} waitCursor - 커서 사용 여부 (true(default) : 사용, false : 미사용)  
 * @return N/A
 */
pForm.gfnTransaction = function(pThis, option)
{
	// 변수 선언
	var svcId 			= option.svcId;     								// 서비스ID
	var svcUrl 			= option.svcUrl;    								// 서비스URL
	var inDs 			= this.gfnNvl(option.inDs		, "");    			// 서버전송 Dataset	
	var outDs 			= this.gfnNvl(option.outDs		, "");     			// 결과회신 Dataset
	var argument 		= this.gfnNvl(option.argument	, ""); 				// 단건전송 arguments
	var callback 		= this.gfnNvl(option.callback	, "fn_callback"); 	// Callback 함수명
	var async 			= this.gfnNvl(option.async		, true);     		// 비동기통신 여부
	var waitCursor 		= this.gfnNvl(option.waitCursor, true);				// Wait Cursor 사용여부
	var dataType        = this.gfnNvl(option.dataType,0);					// default : 0(XML)	
	var compress 		= false;           									// 웹브라우저 환경에서 미지원	
	
	// null 확인
	if (this.gfnIsNull(svcId) || this.gfnIsNull(svcUrl)) {
		trace("[gfnTransaction] svcId, svcUrl 인자값 필수");
		return;
	}

	svcUrl = "svcurl::" + svcUrl; 
	
	// Wait Cursor 지정
	var objEnv = nexacro.getEnvironment();
	if( !waitCursor ) {
		objEnv.set_usewaitcursor(false);
	}
	else {
		objEnv.set_usewaitcursor(true);
	}
	
	let tsSvcId = svcId ; // 서비스구분ID생성

	this._gfv_callback[tsSvcId] = {
		pThis: pThis,
		svcId: svcId,
		callback: callback
	};
	
	// 9. 실행
 	pThis.transaction(tsSvcId, svcUrl, inDs, outDs, argument, "_gfn_callback", async, dataType, compress);
};



/**
 * @class  공통 Callback 함수 (★ 업무에서 직접 사용 금지)
 * 이 함수가 먼저 수행되고 사용자지정 Callback함수가 수행
 * @param  {String} svcId - callback 구분ID
 * @param  {Number} errorCode - Error Code (0 : 정상, -1 : 오류(음수값))
 * @param  {String} [errorMsg] - Error 내용
 * @return N/A
 */
pForm._gfn_callback = function(tsSvcId, errorCode, errorMsg)
{
	var objEnv = nexacro.getEnvironment();
	if( objEnv.usewaitcursor == false ) {
		objEnv.set_usewaitcursor(true);		
	}
	
	var pThis, svcId, callback;	
	var oSvc = this._gfv_callback[tsSvcId];	
	if( oSvc ){
		pThis = oSvc.pThis;
		svcId = oSvc.svcId;
		callback = oSvc.callback;
		delete this._gfv_callback[tsSvcId];
	} else {
		trace("_gfv_callback에 데이타가 존재하지 않습니다.");
	}
	
	trace("[_gfn_callback] tsSvcId", tsSvcId);

	// 콜백 함수 실행
	if( typeof callback == "function" ) {
		callback.call(pThis, svcId, errorCode, errorMsg);		
	}
	//callback in string 일경우
	else if(typeof callback == "string") {
		this[callback].call(pThis, svcId, errorCode, errorMsg);
	}
};