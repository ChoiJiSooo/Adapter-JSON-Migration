/**
*  nps Project (2024)
*  @FileName 	Validate.js 
*  @Creator 	gamsin
*  @CreateDate 	2024.08.26
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2024.08.26     		gamsin					최초 생성    
*******************************************************************************
 ● gfnAddValidation				: 검증 정보 추가  
 ● gfnValidateGrid				: Grid Data 정합성을 검증하고 여부를 반환
 ● gfnValidate  				: Data 정합성을 검증하고 여부를 반환 (Grid는 gfn_validateGrid 사용)
 
 ● gfnIsAlphabet				: 입력값이 알파벳인지 체크
 ● gfnIsUpperCase				: 입력값이 알파벳 대문자인지 체크
 ● gfnIsLowerCase				: 입력값이 알파벳 소문자인지 체크
 ● gfnIsAlphaNum				: 입력값이 알파벳,숫자로 되어있는지 체크
 ● gfnIsNumDash            		: 입력값이 숫자,대시(-)로 되어있는지 체크
 ● gfnIsNumComma            	: 입력값이 숫자,콤마(,)점(.)으로 되어있는지 체크
 ● gfnIsDigit					: 숫자 여부 체크
 ● gfnIsValidFormat				: 입력값이 사용자가 정의한 포맷 형식인지 체크
 ● gfnIsValidEmail				: 이메일 정규식 포맷 형식인지 체크
 ● gfnIsValidCellPhoneNum	 	: 핸드폰번호 정규식 포맷 형식인지 체크
 ● gfnIsValidLandLinePhoneNum	: 지역번호 정규식 포맷 형식인지 체크
 ● gfnIsValidJuminNum			: 주민번호 정규식 포맷 형식인지 체크
 ● gfnIsPassWord				: 숫자,영문자,특수문자($ 제외) 합해서 8자이상 20자미만의 정규식 포맷 형식인지 체크 
 ● gfnGetBindComp				: Dataset의 Column과 Bind되어 있는 Component 객체 반환
 ● gfnIsFrnNo					: 외국인등록번호 검증
 ● gfnIsResno					: 주민등록번호 검증
 ● gfnIsBizNo					: 사업자등록번호 검증
 ● gfnIsIpNo					: ip주소 맞는지 검증
 ● gfnIsEmail					: 정규식을 이용하여 이메일 검증 
 ● gfnValidateComp				: Component 검증 여부 반환
 ● gfnSetValidation				: 검증 Row의 "사용여부(Y, N) / 검증규칙 / alert 표시명"을 변경
 ● gfnDeleteValidation			: 검증 정보 Dataset 에서 해당 정보를 삭제
 ● gfnClearInValidComp			: 컴포넌트에 Valid 표시된 CSS 제거 (조회나 저장 전에 호출필요)
 ● gfnSetInValidComp			: 컴포넌트에 Valid CSS 추가
 ● gfnIsAlphaNumKeycode			: 키코드 값이 alpha,num인지 여부체크
 */

var pForm  = nexacro.Form.prototype;

pForm.VALID_MSG = {
	empty 			: "'{0}'이 없습니다.", 	
	norule 			: "검증방식을 확인하세요.",
	required 		: "'{0}'은(는) 필수 입력 입니다.", 
	length 			: "'{0}'은(는) '{1}'자리입니다.", 
	minlength 		: "'{0}'의 길이는 '{1}'자리 이상 입니다.", 
	maxlength 		: "'{0}'의 길이는 '{1}'자리 이하 입니다.", 
	maxlengthb 		: "'{0}'의 길이는 '{1}'byte 이하 입니다.", 
	min 			: "'{0}'은(는) '{1}'이상의 숫자만 입력 가능합니다.", 
	max 			: "'{0}'은(는) '{1}'이하의 숫자만 입력 가능합니다.", 
	equal 			: "'{0}'이(가) '{1}'와(과) 일치하지 않습니다.", 
	greate 			: "'{0}'이(가) '{1}'보다 작습니다.", 
	less 			: "'{0}'이(가) '{1}'보다 큽니다.", 
	range 			: "'{0}'은(는) '{1}'사이의 값 입니다.", 
	digit 			: "'{0}'은(는) 숫자만 입력 가능합니다.", 
	date 			: "날짜 형식이 맞지 않습니다.", 
	fromto 			: "'{0}'의 날짜가 '{1}'의 날짜보다 큽니다.", 
	fromtonotequal 	: "'{0}'의 날짜가 '{1}'의 날짜보다 동일하거나 큽니다.", 
	dategreate 		: "'{0}'이(가) 현재일보다 작을수 없습니다.", 
	dateless 		: "'{0}'이(가) 현재일보다 클수 없습니다.", 
	term 			: "입력가능 기간은 최대 '{0}'입니다.", 
	frnno			: "외국인 등록번호를 다시 확인하세요.", 
	resno 			: "주민등록번호를 다시 확인하세요.", 
	bzno 			: "사업자등록번호를 다시 확인하세요.", 
	ipno			: "입력하신 값은 IP형식이 아닙니다.",
	email 			: "이메일을 다시 확인하세요.", 
	userfunc 		: "{0} 함수가 정의되어 있지 않습니다.", 
	regex 			: "'{0}'은(는) 부적합한 값입니다."
};

/**
 * @class   Data 정합성을 검증하고 여부를 반환 <br>
 *			※ Grid는 gfn_validateGrid 사용
 * @param  {Object} objDs - 검증 정보 Dataset 객체
 * @param  {Object | String} [option] - JSON 객체 또는 key 직접입력
 *							[JSON 객체]
 *							{String} [key]   - 검증 구분값
 *							{Number} [start] - 검증 범위 Start row
 *							{Number} [end]   - 검증 범위 End row
 * @return {Boolean} flag : true (정상) / false (오류)
 */
pForm.gfnValidate = function(objDs, option)
{
	// 검증 Dataset
	if( this.gfnIsNull(objDs) ) {
		var sMsg = this._gfn_getMsg({msg: this.VALID_MSG.empty, arrParam: ["검증 Dataset"]});
		this.gfnAlert({msg: sMsg});
		return false;
	}
	
	// option
	var key;   // 검증구분값
	var start; // 범위 Start row
	var end;   // 범위 End row
	
	if( option instanceof Object ) { // JSON 객체
		key   = option.key;
		start = option.start;
		end   = option.end;
	} else { // key 직접입력
		key = option;
	}
	
	// key 검증구분값
	if( !this.gfnIsNull(key) ) {
		var filter = this.gfnChangeMessage("Key=='{0}' && UseYn=='Y'", key);
		objDs.filter(filter);
	}
	
	// Key 없는 경우 전체를 대상으로 검증 (※아래 주석처리함)
// 	if (objDs.rowcount == 0) {
// 		var msg1 = this.gfnChangeMessage("[검증 Key : {0}]", key);
// 		var msg2 = this.gfnChangeMessage(this.VALID_MSG.empty, msg1);
// 		alert(msg2);
// 		return false;
// 	}
	
	// Null 확인
	if (this.gfnIsNull(start)) start = 0;
	if (this.gfnIsNull(end)) {
		end = objDs.rowcount;
	} else {
		end = end + 1;
	}
	
	// Parent 객체(Form)
	var oThis = objDs.parent;
	
	// 검증
	for (var i = start; i < end; i++) {
		var dataset = objDs.getColumn(i, "Dataset");
		var column  = objDs.getColumn(i, "Column");
		var title   = objDs.getColumn(i, "Title");
		var rule    = objDs.getColumn(i, "Rule");
		var useYn   = objDs.getColumn(i, "UseYn");
		
		// Bind Dataset
		if (this.gfnIsNull(dataset)) {				
			var sMsg = this._gfn_getMsg({msg: this.VALID_MSG.empty, arrParam: ["Bind Dataset"]});
			this.gfnAlert({msg: sMsg});
			return false;
		}
		
		// column
		if (this.gfnIsNull(column)) {				
			var sMsg = this._gfn_getMsg({msg: this.VALID_MSG.empty, arrParam: ["컬럼"]});
			this.gfnAlert({msg: sMsg});
			return false;
		}
		
		// alert 표시명
		if (this.gfnIsNull(title)) {
			var sMsg = this._gfn_getMsg({msg: this.VALID_MSG.empty, arrParam: ["alert 표시명"]});
			this.gfnAlert({msg: sMsg});
			return false;
		}
		
		// 검증 Rule
		if (this.gfnIsNull(rule)) {			
			var sMsg = this._gfn_getMsg({msg: this.VALID_MSG.empty, arrParam: ["검증 Rule"]});
			this.gfnAlert({msg: sMsg});
			return false;
		}
		
		// Dataset 객체
		var tmpDs = oThis[dataset];
		if (this.gfnIsNull(tmpDs)) {			
			var sMsg = this._gfn_getMsg({msg: this.VALID_MSG.empty, arrParam: ["Dataset 객체"]});
			this.gfnAlert({msg: sMsg});
			return false;
		}
		
		// Column 확인
		if (this.gfnIsNull(column)) {			
			var sMsg = this._gfn_getMsg({msg: this.VALID_MSG.empty, arrParam: ["컬럼"]});
			this.gfnAlert({msg: sMsg});
			return false;
		}
		
		// Component 검증
		var option = {
			dataset : dataset, 
			column : column, 
			title : title, 
			rule : rule
		};
		
		var ret = this.gfnValidateComp(oThis, option);
		if (ret == false) return false;
	}
	
	return true;
};

/**
 * @class  Component 검증 여부 반환 <br>
 * @param  {Object} pThis - Form 객체
 * @param  {Object} option - JSON 객체
 *					{String} dataset - Bind Dataset 명
 *					{String} column  - Bind Column
 *					{String} title   - alert 표시명
 *					{String} rule    - 검증규칙
 * @return {Json} {Boolean} flag : true (정상) / false (오류)
                  {String} msg : return false에 대한 사유
 */
pForm.gfnValidateComp = function(pThis, option)
{
	var dataset = option.dataset;
	var column  = option.column;
	var title   = option.title;
	var rule    = option.rule;
	
	if (this.gfnIsNull(dataset) || this.gfnIsNull(column) || this.gfnIsNull(title) || this.gfnIsNull(rule)) return false;
	
	// Dataset 객체
	var objDs = pThis[dataset];
	if (this.gfnIsNull(objDs)) {		
		var sMsg = this._gfn_getMsg({msg: this.VALID_MSG.empty, arrParam: ["Bind Dataset"]});
		this.gfnAlert({msg:sMsg});
		return false;
	}
	
	// 데이터 없으면 동작 안함. true return	
	if( objDs.getRowCount() == 0 ){
		return true;
	}
	
	var arrTitle = title.split(";"); // Title
	var arrColumn = column.split(";");
	var arrRule = rule.split(";");
	
	// Column 확인
	for (var i = 0; i < arrColumn.length; i++) {
		if (this.gfnIsNull(objDs.getColumnInfo(arrColumn[i]))) {			
			var sMsg = this._gfn_getMsg({msg: this.VALID_MSG.empty, arrParam: [arrColumn[i]]});
			this.gfnAlert({msg:sMsg});
			return false;
		}
	}
	
	var msg = "";
	var isValid = true;
	var objComp = this.gfnGetBindComp(pThis, dataset, arrColumn[0]); // 대상 Component
	if (this.gfnIsNull(objComp)) {
		var msg = "'" + dataset +"'의 '"+ arrColumn[0] + "'칼럼과 bind되어 있는 Component를 찾을 수 없습니다.";		
		this.gfnAlert({msg:msg});
		return false;
	}
	
	var value = objComp[0].value;
	var tmpComp = ( objComp[0].id == "edt_multiComboCode" )?objComp[0].parent.edt_multiCombo : objComp[0]; // 멀티콤보는 대상component를 변경해줌.
	
	for (var i = 0; i < arrRule.length; i++) {
		var arrParam = arrRule[i].split("=");
		var type = this.gfnToLower(arrParam[0]);
		
		// 두 개의 칼럼값을 비교하는 경우 (equals, greate, less, fromto, termyear, termmonth, termday) 또는 필수 (required)
		var objCompare = null;
		var compareValue = null;
		if (arrColumn.length > 1
			&& (type == "equal" || type == "greate" || type == "less" || type == "fromto" || type == "fromtonotequal"
			|| type == "termyear" || type == "termmonth" || type == "termday" || type == "required")) {
			objCompare = this.gfnGetBindComp(pThis, dataset, arrColumn[1]); // 비교 Component
			compareValue = objCompare[0].value;
		}
		
		var option = {
			tmpComp 	 : tmpComp, 
			objCompare 	 : objCompare, 
			arrTitle 	 : arrTitle, 
			arrColumn 	 : arrColumn, 
			arrParam 	 : arrParam, 
			value 		 : value, 
			compareValue : compareValue
		};
		
		var ret = this._gfn_isValidate(pThis, option);
		isValid = ret.isValid;
		tmpComp = ret.tmpComp;
		
		if (!isValid) {
			msg = ret.msg;
			break; // for문 break
		}
	}
	
	if (isValid) {
		return true;
	} else {		
		this.gfnSetInValidComp(tmpComp);
		tmpComp.setFocus();
		if( !this.gfnIsNull(msg) ) {
			this.gfnAlert({msg:msg});
		}
		return false;
	}
};

/**
 * @class  Dataset의 Column과 Bind되어 있는 Component 객체 반환 <br>
 * @param  {Object} pThis - Form 객체
 * @param  {String} dataset - Dataset 명
 * @param  {String} column - Column 명
 * @return {Array} Component 객체 배열
 */
pForm.gfnGetBindComp = function(pThis, dataset, column)
{
	if (this.gfnIsNull(pThis)) return null;
	if (this.gfnIsNull(dataset)) return null;
	if (this.gfnIsNull(column)) return null;
	
	/*
	 * [BindItem]
	 * columnid 	바인딩할 Dataset의 Column ID를 설정하는 속성
	 * compid 		바인딩할 컴포넌트 ID를 설정하는 속성
	 * datasetid 	바인딩할 Dataset ID를 설정하는 속성
	 * name 		BindItem 의 이름을 설정하는 속성 
	 * parent 		BindItem 의 부모 오브젝트를 갖는 읽기전용 속성 
	 * propid 		바인딩할 컴포넌트의 속성을 설정하는 속성
	 */
	
	var arrComp = new Array();
	
	for (var i = 0; i < pThis.binds.length; i++) {
		var objBindItem = pThis.binds[i];
		
		if (dataset == objBindItem.datasetid && column == objBindItem.columnid) {
			var objComp = eval("this." + objBindItem.compid);
			arrComp.push(objComp);
		}
	}	
	return arrComp;
};

/**
* @class 	입력값이 알파벳인지 체크
* @param    {String}
* @return   {boolean}
* @example       var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
*                var lowercase = "abcdefghijklmnopqrstuvwxyz";
*                var number    = "0123456789";
*                function gfnIsAlphaNum(str) {
*                    var strChars = uppercase + lowercase + number;
*                    return gfn_containsCharsOnly(obj,strChars);
*                }
*/
pForm.gfnIsAlphabet = function(sVal) {
	var sChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	return this.gfn_containsCharsOnly(sVal, sChars);
};

/**
* @class 	입력값이 알파벳 대문자인지 체크
* @param    {String}
* @return   {boolean}
*/
pForm.gfnIsUpperCase = function(sVal) {
	var sChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	return this.gfn_containsCharsOnly(sVal,sChars);
};

/**
* @class 	입력값이 알파벳 소문자인지 체크
* @param    {String}
* @return값 	{boolean}
*/
pForm.gfnIsLowerCase = function(sVal) {
	var sChars = "abcdefghijklmnopqrstuvwxyz";
	return this.gfn_containsCharsOnly(sVal,sChars);
};

/**
* @class 	입력값이 알파벳,숫자로 되어있는지 체크
* @param	{String}
* @return 	{boolean}
*/
pForm.gfnIsAlphaNum = function (sVal) {
	var sChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	return this.gfn_containsCharsOnly(sVal,sChars);
};

/**
* @class 	입력값이 숫자,대시(-)로 되어있는지 체크
* @param	{String}
* @return 	{boolean}
*/
pForm.gfnIsNumDash = function (sVal) {
	var sChars = "-0123456789";
	return this.gfn_containsCharsOnly(sVal,sChars);
};

/**
* @class 	입력값이 숫자,콤마(,)점(.)으로 되어있는지 체크
* @param	{String}
* @return 	{boolean}
*/
pForm.gfnIsNumComma = function (sVal) {
	var sChars = ".,0123456789";
	return this.gfn_containsCharsOnly(sVal,sChars);
};

/**
 * @class 	숫자 여부 체크
 * @param 	{String}
 * @return 	{boolean}
 */
pForm.gfnIsDigit = function(sNum)
{
	var c;
	var point_cnt=0;
	var ret=true;

	if ( this.gfnIsNull(sNum) )	return false;

	for (var i=0; i<sNum.length; i++)
	{
		c = sNum.charAt(i);
		if (i == 0 && (c == "+" || c == "-"));
		else if (c >= "0" && c <= "9");
		else if (c == ".")
		{
			point_cnt++;
			if ( point_cnt > 1 )
			{
				ret = false;
				break;
			}
		}
		else
		{
			ret = false;
			break;
		}
	}
	return ret;
};

/**
* @class 	입력값이 사용자가 정의한 포맷 형식인지 체크
* @param	{String} 입력값
* @param	{String} 사용자 정의 포맷 (자바스크립트의 'regular expression'을 참조)
* @return 	{boolean}
*/
pForm.gfnIsValidFormat = function (sVal,format) {
	if (sVal.search(format) != -1) {
		return true; //올바른 포맷 형식
	}
	return false;
};

/**
* @class 	입력값이 이메일 형식인지 체크
* @param	{String}
* @return 	{boolean}
*/
pForm.gfnIsValidEmail = function (sVal) {
	var sFormat = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
	return this.gfnIsValidFormat(sVal,sFormat);
};


/**
* @class 	입력값이 핸드폰전화번호 형식(숫자(3)-숫자(3,4)-숫자(4))인지 체크
* @param	{String}
* @param    "-" dash를 포함하셔 체크할지 여부 옵션추가
* @return 	{boolean}
*/
pForm.gfnIsValidCellPhoneNum = function (sVal, bDash) {

	var sFormat = /^01(?:0|1|[6-9])-\d{3,4}-\d{4}$/; // dash 포함해서 체크
	bDash = (this.gfnIsNull(bDash)) ? true : false;
	if(!bDash) sFormat = /^01(?:0|1|[6-9])\d{3,4}\d{4}$/;
	return this.gfnIsValidFormat(sVal,sFormat);
};


/**
* @class 	입력값이 일반전화번호 형식(숫자(2,3)-숫자(3,4)-숫자(4))인지 체크
* @param	{String}
* @return 	{boolean}
*/
pForm.gfnIsValidLandLinePhoneNum = function (sVal) {
	var sFormat = /^\d{2,3}-\d{3,4}-\d{4}$/;
	return this.gfnIsValidFormat(sVal,sFormat);
};

/**
* @class 	입력값이 주민번호 형식(숫자(6)-숫자(7))인지 체크
* @param	{String}
* @return 	{boolean}
*/
pForm.gfnIsValidJuminNum = function (sVal) {
	var sFormat = /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-[1-4][0-9]{6}$/;
	return this.gfnIsValidFormat(sVal,sFormat);
};

/**
* @class 	숫자,영문자,특수문자($ 제외) 합해서 8자이상 20자미만
* @param	{String}
* @return 	{boolean}
*/
pForm.gfnIsPassWord = function (sVal) {
	var sFormat = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[`~!@!%*#^?&\\(\\)\-_=+]).{8,20}$/;
	return this.gfnIsValidFormat(sVal,sFormat);
};

/**
 * @class  외국인등록번호 검증 <br>
 * @param  {String} frnNo - 외국인등록번호
 * @return {Boolean} 적합여부 (true / false) 
 */
pForm.gfnIsFrnNo = function(frn)
{
	frn = frn.split("-").join('');
	if( frn.length !== 13 ) {
		return false;
	}
	
	var chkSum = 0;
	for( var i=0; i<12; i++ ) {
		chkSum += ((frn.substr(i, 1) >> 0) * ((i%8)+2));
	}
	
	var frnMatch = (13-(chkSum%11))%10 == frn.substr(12,1);
	
	return frnMatch;
};

/**
 * @class  주민등록번호 검증 <br>
 * @param  {String} resNo - 주민등록번호
 * @return {Boolean} 적합여부 (true / false) 
 */
pForm.gfnIsResno = function(resNo)
{
	if( this.gfnIsNull(resNo) ) return false;
	
	var birthYear = this.gfnGetBirthYear(resNo);
	if (birthYear == "N") return false;
	
	birthYear += resNo.substr(0, 2);
	var birthMonth = resNo.substr(2, 2) - 1;
	var birthDate = resNo.substr(4, 2);
	var birth = new Date(birthYear, birthMonth, birthDate);

	if (birth.getYear() % 100 != resNo.substr(0, 2) ||
		birth.getMonth() != birthMonth ||
		birth.getDate() != birthDate) {
		return false;
	}

	// Check Sum 코드의 유효성 검사
	var buf = new Array(13);
	for (var i = 0; i < 6; i++) {
		buf[i] = parseInt(resNo.charAt(i));
	}
	
	for (i = 6; i < 13; i++) {
		buf[i] = parseInt(resNo.charAt(i));
	}
	
	var multipliers = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
	for (i = 0, sum = 0; i < 12; i++) {
		sum += (buf[i] *= multipliers[i]);
	}
	
	if ((11 - (sum % 11)) % 10 != buf[12]) {
		return false;
	} else {
		return true;
	}
};

/**
 * @class  value의 number 여부 검증 <br>
 * @param  {*} value 확인할 value
 * @return {Boolean} number 여부
 * @example
 * this.gfn_isNumber(1234); // true
 * this.gfn_isNumber("1234"); // false
 */		
pForm.gfn_isNumber = function(value)
{
	return typeof(value) === "number" && isFinite(value);
};

/**
 * @class  값 검증 여부 반환 <br>
 * @param  {Object} pThis - Form 객체
 * @param  {Object} option - JSON 객체
 *					{Array} arrTitle      - Title Array
 *					{Array} arrColumn     - Column Array
 *					{Array} arrParam      - Param Array
 *					{String} value        - 값
 *					{String} compareValue - 비교값
 * @return {Boolean} ture (성공) / false (실패)
 */
pForm._gfn_isValidate = function(pThis, option)
{
	var isValid 	 = true;
	var msg 		 = "";	
	var tmpComp 	 = option.tmpComp;
	var objCompare 	 = option.objCompare;
	var arrTitle 	 = option.arrTitle;
	var arrColumn 	 = option.arrColumn;
	var arrParam 	 = option.arrParam;
	var value 		 = option.value;
	var compareValue = option.compareValue;
	
	// 필수값 체크용
	var _fn_IsNull = function(value){
		if (value == null || value == undefined) return true; 
		var chkStr = new String(value);
		if (chkStr == null || chkStr.valueOf() == "undefined" || chkStr.valueOf() == "NaN") return true;
		chkStr = nexacro.trim(chkStr);
		if (chkStr.toString().length == 0) return true;
		return false;	
	};
	
	switch (arrParam[0]) {
		case "required" : // 필수			
			msg = this._gfn_getMsg({msg: this.VALID_MSG.required, arrParam: [arrTitle[0]]});
			if (_fn_IsNull(value)) {
				isValid = false;
			} else if (arrColumn.length > 1 && this.gfnIsNull(compareValue)) {				
				msg = this._gfn_getMsg({msg: this.VALID_MSG.required, arrParam: [arrTitle[1]]});
				tmpComp = objCompare[0];
				isValid = false;
				
				if (tmpComp instanceof Grid) {
					tmpComp.col = tmpComp.col2;
				}
			} else { // checkbox이며 무조건 Check 해야 할때 : "required=true" 사용 (※ Grid는 사용불가)
				if (arrParam[1] == "true" && !tmpComp.isChecked()) {
					isValid = false;
				}
			}
			break;
			
		case "length" : // 길이
			if (!_fn_IsNull(value)) {
				if (this.gfnLength(value) != parseInt(arrParam[1])) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.length, arrParam: [arrTitle[0], arrParam[1]]});
					isValid = false;
				}
			}
			break;
			
		case "minlength" : // 최소길이
			if (!_fn_IsNull(value)) {
				if (this.gfnLength(value) < parseInt(arrParam[1])) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.minlength, arrParam: [arrTitle[0], arrParam[1]]});
					isValid = false;
				}
			}
			break;
			
		case "maxlength" : // 최대길이
			if (!_fn_IsNull(value)) {
				if (this.gfnLength(value) > parseInt(arrParam[1])) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.maxlength, arrParam: [arrTitle[0], arrParam[1]]});
					isValid = false;
				}
			}
			break;
			
		case "maxlengthb" : // 최대길이 byte 단위 체크
			if (!_fn_IsNull(value)) {
				if (this.gfnLengthb(value) > parseInt(arrParam[1])) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.maxlengthb, arrParam: [arrTitle[0], arrParam[1]]});
					isValid = false;
				}
			}
			break;	
			
		case "min" : // 최소값
			if (!_fn_IsNull(value)) {
				if (parseFloat(value) < parseFloat(arrParam[1])) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.min, arrParam: [arrTitle[0], arrParam[1]]});
					isValid = false;
				}
			}
			break;
			
		case "max" : // 최대값
			if (!_fn_IsNull(value)) {
				if (parseFloat(value) > parseFloat(arrParam[1])) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.max, arrParam: [arrTitle[0], arrParam[1]]});
					isValid = false;
				}
			}
			break;
			
		case "equal" : // 비교
			if (!_fn_IsNull(value)) {
				if (value != compareValue) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.equal, arrParam: [arrTitle[0], arrTitle[1]]});
					isValid = false;
				}
			}
			break;
			
		case "greate" : // 보다 큰
			if (!_fn_IsNull(value)) {
				if (value < compareValue) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.greate, arrParam: [arrTitle[0], arrTitle[1]]});
					isValid = false;
				}
			}
			break;
			
		case "less" : // 보다 작은
			if (!_fn_IsNull(value)) {
				if (value > compareValue) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.less, arrParam: [arrTitle[0], arrTitle[1]]});
					isValid = false;
				}
			}
			break;
			
		case "range" : // 범위
			if (!_fn_IsNull(value)) {
				var arrRange = arrParam[1].split(",");
				if (parseInt(value) < parseInt(arrRange[0]) || parseInt(value) > parseInt(arrRange[1])) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.range, arrParam: [arrTitle[0], arrRange[0] + " ~ " + arrRange[1]]});
					isValid = false;
				}
			}
			break;
			
		case "digit" : // 숫자
			if (!_fn_IsNull(value)) {
				if (!this.gfnIsDigit(value)) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.digit, arrParam: [arrTitle[0]]});
					isValid = false;
				}
			}
			break;
			
		case "date" : // 날짜 (년-월-일)
			if (!_fn_IsNull(value)) {
				if (!this.gfnIsDate(value)) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.date, arrParam: ["(년-월-일)"]});
					isValid = false;
				}
			}
			break;
			
		case "dateym" : // 날짜 (년-월)
			if (!_fn_IsNull(value)) {
				if (!this.gfnIsDate(value + "01")) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.date, arrParam: ["(년-월)"]});
					isValid = false;
				}
			}
			break;
			
		case "fromto" : // 기간
			if (!_fn_IsNull(value) && !_fn_IsNull(compareValue)) {
				if (value > compareValue) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.fromto, arrParam: [arrTitle[0], arrTitle[1]]});
					isValid = false;
				}
			}
			break;
			
		case "fromtonotequal" : // 기간 (동일날짜 false)
			if (!_fn_IsNull(value) && !_fn_IsNull(compareValue)) {
				if (value >= compareValue) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.fromtonotequal, arrParam: [arrTitle[0], arrTitle[1]]});
					isValid = false;
				}
			}
			break;			
			
			
			
		case "dategreate" : // 현재날짜 보다 큰
			if (!_fn_IsNull(value)) {
				if (value < this.gfnGetDate()) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.dategreate, arrParam: [arrTitle[0]]});
					isValid = false;
				}
			}
			break;
			
		case "dateless" : // 현재날짜 보다 작은
			if (!_fn_IsNull(value)) {
				if (value > this.gfnGetDate()) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.dateless, arrParam: [arrTitle[0]]});
					isValid = false;
				}
			}
			break;
			
		case "termday" : // 기간(일)
			if (!_fn_IsNull(value) && !_fn_IsNull(compareValue)) {
				if (value > compareValue) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.fromto, arrParam: [arrTitle[0], arrTitle[1]]});
					isValid = false;
					break;
				}
				
				var term = parseInt(arrParam[1]);
				if (compareValue >= this.gfnAddDate(value, term)) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.term, arrParam: [term+"일"]});
					isValid = false;
				}
			}
			break;
			
		case "termmonth" : // 기간(월)
			if (!_fn_IsNull(value) && !_fn_IsNull(compareValue)) {
				if (value > compareValue) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.fromto, arrParam: [arrTitle[0], arrTitle[1]]});
					isValid = false;
					break;
				}
				
				var term = parseInt(arrParam[1]);
				if (compareValue >= this.gfnAddMonth(value, term)) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.term, arrParam: [term+ "개월"]});
					isValid = false;
				}
			}
			break;
			
		case "termyear" : // 기간(년)
			if (!_fn_IsNull(value) && !_fn_IsNull(compareValue)) {
				if (value > compareValue) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.fromto, arrParam: [arrTitle[0], arrTitle[1]]});
					isValid = false;
					break;
				}
				
				var term = parseInt(arrParam[1]);
				if (compareValue >= this.gfnAddYear(value, term)) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.term, arrParam: [term + "년"]});
					isValid = false;
				}
			}
			break;
		case "frnno" : // 외국인등록번호
			if( !_fn_IsNull(value) ) {
				if( !this.gfnIsFrnNo(value) ) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.frnno});
					isValid = false;
				}
			}
			break;
		case "resno" : // 주민등록번호
			if (!_fn_IsNull(value)) {
				if (!this.gfnIsResno(value)) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.resno});
					isValid = false;
				}
			}
			break;
		
		case "ipno":	//IP번호
			if (!_fn_IsNull(value)) {
				if (!this.gfnIsIpNo(value)) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.ipno});
					isValid = false;
				}
			}
			break;
		case "bzno" : // 사업자등록번호
			if (!_fn_IsNull(value)) {
				if (!this.gfnIsBizNo(value)) {
					msg = this._gfn_getMsg({msg: this.VALID_MSG.bzno});					
					isValid = false;
				}
			}
			break;
			
		case "email" : // 이메일
			if (!_fn_IsNull(value)) {
				if (!this.gfnIsEmail(value)) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.email});
					isValid = false;
				}
			}
			break;
			
		case "function" : // 사용자 함수
			var objFnc = pThis[arrParam[1]];
			trace("check001");
			if ((typeof objFnc) == "function") {
				// 두번째 인자값 부터 Argument로 전달됨
				isValid = objFnc.call(pThis, pThis, tmpComp, value);
				trace("check002");
				break;
			} else {				
				msg = this._gfn_getMsg({msg: this.VALID_MSG.userfunc, arrParam: [arrParam[1]]});
				isValid = false;
				trace("check003");
			}
			break;
			
		case "regex" : // 정규식
			var regExp = arrParam[1];
			
			if (!_fn_IsNull(value)) {
				var objRegExp = eval(regExp);
				var objResult = objRegExp.exec(value);
				
				if (this.gfnIsNull(objResult)) {					
					msg = this._gfn_getMsg({msg: this.VALID_MSG.regex, arrParam: [arrTitle[0]]});
					isValid = false;
				}
			}
			break;
			
		default :			
			msg = this._gfn_getMsg({msg: this.VALID_MSG.norule});
			isValid = false;
			break;
	}
	
	var ret = {
		isValid : isValid, 
		msg : msg, 
		tmpComp : tmpComp
	};
	return ret;
};

/**
 * @class  사업자등록번호 검증 <br>
 * @param  {String} value
 * @return {Boolean} 적합여부 (true / false) 
 */
pForm.gfnIsBizNo = function(bizNo)
{
	if (this.gfnLength(bizNo) != 10) {
		return false;
	}
	
	// bizID는 숫자만 10자리로 해서 문자열로 넘긴다.
	var checkID = new Array(9);
	checkID[0] = 1;
	checkID[1] = 3;
	checkID[2] = 7;
	checkID[3] = 1;
	checkID[4] = 3;
	checkID[5] = 7;
	checkID[6] = 1;
	checkID[7] = 3;
	checkID[8] = 5;
	
	var chkSum = 0, remander;
	for (var i = 0; i < this.gfnLength(checkID); i++) {
		chkSum += checkID[i] * parseInt(this.gfnSubstr(bizNo, i, 1));
	}
	
	if (chkSum == 0) {
		return false;
	}
	
	chkSum += Math.floor((checkID[8] * parseInt(this.gfnSubstr(bizNo,8, 1))) / 10);
	var remain = chkSum % 10;
	if (remain != 0) {
		remain = 10 - remain;
	}
	
	if (remain == parseInt(this.gfnSubstr(bizNo,9, 1))) {
		return true;
	}
	
	return false;
};

/**
 * @class  정규식을 이용하여 이메일 검증 <br>
 * @param  {String} email - 이메일
 * @return {Boolean} 적합여부 (true / false)
 * @example
 */
pForm.gfnIsEmail = function(email)
{
	var ret = false;
	var expr = "[0-9a-zA-Z_-]+[0-9a-zA-Z.,_-]+@[0-9a-zA-Z_-]+(\\.[a-zA-Z]+)+";
	var regexp = new RegExp(expr, "ig");
	var exec = regexp.exec(email);
	
	if (this.gfnIsNull(exec)) {
		ret = false;
	} else {
		if ((exec.index == 0) && (exec[0].length == email.length)) {
			ret = true;
		} else {
			ret = false;
		}
	}
	return ret;
};

/**
 * @class  IP 주소가 맞는지 확인
 * @param  {String} str - ip주소
 * @return {Boolean} 적합여부 (true / false)
 * @example
 */
pForm.gfnIsIpNo = function(str)
{
	var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if( ipformat.test(str) ) {
        return true;
    } else {        
        return false;
    }
};


/**
 * @class  검증 정보 추가 <br>
 * @param  {Object} objDs - 검증 정보 Dataset 객체
 * @param  {Object} option - JSON 객체
 *					{String} key     - 검증 구분값 (구분 가능 문자로 표시)
 *					{String} dataset - Bind Dataset명 (※객체 아님)
 *					{String} column  - Bind Column
 *					{String} title   - alert 표시명
 *					{String} rule    - 검증규칙
 *					{String} [useYn] - 사용여부 (Y / N)
 *					{String} [row]   - 특정 위치인 경우
 * @return {Number} 성공 : 추가된 row 의 position
 *					실패 : -1
 */
pForm.gfnAddValidation = function(objDs, option)
{
	if (this.gfnIsNull(objDs)) return -1;
	if (this.gfnIsNull(option)) return -1;
	
	var key     = option.key;
	var dataset = option.dataset;
	var column  = option.column;
	var title   = option.title;
	var rule    = option.rule;
	var useYn   = option.useYn;
	var insRow  = option.row;
	
	// Null 확인
	if (this.gfnIsNull(dataset) || this.gfnIsNull(column) || this.gfnIsNull(title) || this.gfnIsNull(rule)) return -1;
	
	// Parent 객체(Form)
	var oThis = objDs.parent;
	var row = -1;
	
	// 행 추가
	if (!this.gfnIsNull(insRow) && insRow > -1) {
		row = objDs.insertRow(insRow);
	} else {
		row = objDs.addRow();
	}
	
	// 값 설정
	objDs.setColumn(row, "Key", key); // 검증 구분값 (구분 가능 문자로 표시)
	objDs.setColumn(row, "Dataset", dataset); // Bind Dataset명
	objDs.setColumn(row, "Column", column); // Bind Column
	objDs.setColumn(row, "Title", title); // alert 표시명
	objDs.setColumn(row, "Rule", rule); // 검증규칙
	objDs.setColumn(row, "UseYn", this.gfnNvl(useYn, "Y")); // 사용여부
	
	return row;
};

/**
 * @class  검증 Row의 "사용여부(Y, N) / 검증규칙 / alert 표시명"을 변경 <br>
 * @param  {Object} objDs - 검증 정보 Dataset 객체
 * @param  {Object} option - JSON 객체 (아래 항목값은 Array 가능)
 *					{Number | Array} row - row position
 *					{String | Array} [useYn] - 사용여부  Y / N (default : N)
 *					{String | Array} [rule] - 검증규칙
 *					{String | Array} [title] - alert 표시명
 * @return N/A
 */
pForm.gfnSetValidation = function(objDs, option)
{
	if (this.gfnIsNull(objDs)) return;
	if (this.gfnIsNull(option)) return;
	
	var row = option.row;
	var useYn = option.useYn;
	var rule = option.rule;
	var title = option.title;
	
	if (row instanceof Array) { // 다건
		for (var i = 0; i < row.length; i++) {
			if (!this.gfnIsNull(useYn)) {
				if (useYn instanceof Array) { 
					if (!this.gfnIsNull(useYn[i])) objDs.setColumn(row[i], "UseYn", useYn[i]);
				} else {
					if (!this.gfnIsNull(useYn)) objDs.setColumn(row[i], "UseYn", useYn);
				}
			}
			
			if (!this.gfnIsNull(rule)) {
				if (!this.gfnIsNull(rule[i])) objDs.setColumn(row[i], "Rule", rule[i]);
			}
			
			if (!this.gfnIsNull(title)) {
				if (!this.gfnIsNull(title[i])) objDs.setColumn(row[i], "Title", title[i]);
			}
		}
	} else { // 단건
		if (!this.gfnIsNull(useYn)) objDs.setColumn(row, "UseYn", useYn);
		if (!this.gfnIsNull(rule)) objDs.setColumn(row, "Rule", rule);
		if (!this.gfnIsNull(title)) objDs.setColumn(row, "Title", title);
	}
};

/**
 * @class  검증 정보 Dataset 에서 해당 정보를 삭제 <br>
 * @param  {Object} objDs - 검증 정보 Dataset 객체
 * @param  {String | Number} [option] - 검증구분값 또는 삭제할 row (※ option이 없는 경우 전체 삭제)
 * @return N/A
 */
pForm.gfnDeleteValidation = function(objDs, option)
{
	// 검증 Dataset
	if (this.gfnIsNull(objDs)) {
		return false;
	}
	
	// option이 없는 경우 전체 삭제
	if (this.gfnIsNull(option)) {
		objDs.clearData();
	}
	
	if (typeof(option) == "string") { // 검증구분값
		var filter = this.gfnChangeMessage("Key=='{0}'", option);
		objDs.filter(filter);
		objDs.deleteAll();
		objDs.applyChange();
		objDs.filter("");
	} else { // 삭제할 row
		if (option instanceof Array) {
			objDs.deleteMultiRows(option);
		} else {
			objDs.deleteRow(option);
		}
	}
};

/**
 * @class  Grid Data 정합성을 검증하고 여부를 반환 <br>
 * @param  {Object} objGrid - 검증 Grid 객체
 * @param  {Object} objDs - 검증 정보 Dataset 객체
 * @param  {Object | String} [option] - JSON 객체 또는 key 직접입력
 *							[JSON 객체]
 *							{String} key     - 검증구분값
 *							{Number} [start] - 검증범위 Start row
 *							{Number} [end]   - 검증범위 End row
 *							{Boolean} [isUpdate] - Insert, Update 된 경우에만 Check
 * @return {Boolean} true (정상) / false (오류)
 */
pForm.gfnValidateGrid = function(objGrid, objDs, option)
{
	if (this.gfnIsNull(objGrid)) return false;
	
	// 검증 Dataset
	if (this.gfnIsNull(objDs)) {
		var msg = this._gfn_getMsg({msg: this.VALID_MSG.empty, arrParam: ["검증 Dataset"]});
		this.gfnAlert({msg:msg});
		return false;
	}
	
	// option
	var key;   // 검증구분값
	var start; // 범위 Start row
	var end;   // 범위 End row
	var isUpdate; // Insert, Update 된 경우에만 Check
	
	if (option instanceof Object) { // JSON 객체
		key   = option.key;
		start = option.start;
		end   = option.end;
		isUpdate = option.isUpdate;
	} else { // key 직접입력
		key = option;
	}
	
	// key 검증구분값
	if (!this.gfnIsNull(key)) {
		var filter = this.gfnChangeMessage("Key=='{0}' && UseYn=='Y'", key);
		objDs.filter(filter);
	}
	
	// Key 없는 경우 전체를 대상으로 검증 (※아래 주석처리함)
// 	if (objDs.rowcount == 0) {
// 		var msg1 = this.gfnChangeMessage("[검증 Key : {0}]", key);
// 		var msg2 = this.gfnChangeMessage(this.VALID_MSG.empty, msg1);
// 		alert(msg2);
// 		return false;
// 	}
	
	// Null 확인
	if (this.gfnIsNull(start)) start = 0;
	if (this.gfnIsNull(end)) {
		end = objDs.rowcount;
	} else {
		end = end + 1;
	}
	if (this.gfnIsNull(isUpdate)) isUpdate = true;
	
	// Parent 객체(Form)
	var oThis = objDs.parent;
	
	var bindDs = objGrid.getBindDataset();
	var msg = "";
	var isValid = true;
	
	// 검증
	for (var i = 0; i < bindDs.rowcount; i++) {
		// Insert, Update 된 경우에만 Check, normal이면 skip
		if (isUpdate == true && !this.gfnIsUpdatedRow(bindDs, i)) continue;
		
		for (var j = start; j < end; j++) {
			var dataset = objDs.getColumn(j, "Dataset");
			var column  = objDs.getColumn(j, "Column");
			var title   = objDs.getColumn(j, "Title");
			var rule    = objDs.getColumn(j, "Rule");
			var useYn   = objDs.getColumn(j, "UseYn");
			
			// Bind Dataset
			if (this.gfnIsNull(dataset)) {					
				var msg = this._gfn_getMsg({msg: this.VALID_MSG.empty, arrParam: ["Bind Dataset"]});				
				this.gfnAlert({msg:msg});
				return false;
			}
			
			// column
			if (this.gfnIsNull(column)) {						
				var msg = this._gfn_getMsg({msg: this.VALID_MSG.empty, arrParam: ["컬럼"]});
				this.gfnAlert({msg:msg});
				return false;
			}
			
			// alert 표시명
			if (this.gfnIsNull(title)) {				
				var msg = this._gfn_getMsg({msg: this.VALID_MSG.empty, arrParam: ["alert 표시명"]});
				this.gfnAlert({msg:msg});
				return false;
			}
			
			// 검증 Rule
			if (this.gfnIsNull(rule)) {				
				var msg = this._gfn_getMsg({msg: this.VALID_MSG.empty, arrParam: ["검증 Rule"]});
				this.gfnAlert({msg:msg});
				return false;
			}
			
			// Column 확인
			if (this.gfnIsNull(column)) {				
				var msg = this._gfn_getMsg({msg: this.VALID_MSG.empty, arrParam: [column + " Column"]});
				this.gfnAlert({msg:msg});
				return false;
			}
			
			var arrTitle 	= title.split(";"); // Title
			var arrColumn 	= column.split(";");
			var arrRule 	= rule.split(";");
			
			// 다중 Column 확인
			for (var k = 0; k < arrColumn.length; k++) {
				if (this.gfnIsNull(bindDs.getColumnInfo(arrColumn[k]))) {					
					var msg = this._gfn_getMsg({msg: this.VALID_MSG.empty, arrParam: [arrColumn[k]]});
					this.gfnAlert({msg:msg});
					return false;
				}
			}
			
			var value = bindDs.getColumn(i, arrColumn[0]);
			
			for (var r = 0; r < arrRule.length; r++) {
				var arrParam = arrRule[r].split("=");
				var type = this.gfnToLower(arrParam[0]);
				
				// 두 개의 칼럼값을 비교하는 경우 (equals, greate, less, fromto, termyear, termmonth, termday) 또는 필수 (required)
				var compareValue = null;
				if (arrColumn.length > 1
					&& (type == "equal" || type == "greate" || type == "less" || type == "fromto" || type == "fromtonotequal"
					|| type == "termyear" || type == "termmonth" || type == "termday" || type == "required")) {
					compareValue = bindDs.getColumn(i, arrColumn[1]);
					objGrid.col2 = objGrid.getBindCellIndex("body", arrColumn[1]);
				}
				
				// 사용자 함수에서 사용
				objGrid.col = objGrid.getBindCellIndex("body", arrColumn[0]);
				objGrid.row = i;
				
				var option = {
					tmpComp 		: objGrid, 
					objCompare 		: [objGrid], 
					arrTitle 		: arrTitle, 
					arrColumn 		: arrColumn, 
					arrParam 		: arrParam, 
					value 			: value, 
					compareValue 	: compareValue
				};
				
				var ret = this._gfn_isValidate(oThis, option);
				isValid = ret.isValid;
				
				if (isValid == false) {
					msg = ret.msg;
					break; // for문 break
				}
			}
			
			if (isValid == false) break; // for문 break
		}
		
		if (isValid == false) {		
			if (objGrid.col > -1) {				
				bindDs.set_rowposition(i);				
				objGrid.setFocus();				
				objGrid.setCellPos(objGrid.col);
				objGrid.showEditor(true);
			}
			if( !this.gfnIsNull(msg) ) {
				this.gfnAlert({msg:msg, callback:function(){
					bindDs.set_rowposition(i);				
					objGrid.setFocus();				
					objGrid.setCellPos(objGrid.col);
					objGrid.showEditor(true);
				}});
			}
			return false;
		}
	}
	return true;
};

/**
 * @class  컴포넌트에 Valid CSS 추가 <br>
 * @param  {Object} 컴포넌트 : Calendar, MaskEdit, Combo, Edit, TextArea, Spin
 * @return N/A
 */
pForm.gfnSetInValidComp = function(obj)
{
	var css = this.gfnNvl(obj.cssclass, "");
	if( !this.gfnIsNull(css) ) {
		css += ","
	}
	css+= "InvalidData";
	obj.set_cssclass(css);
};

/**
 * @class  컴포넌트에 Valid 표시된 CSS 제거 (조회나 저장 전에 호출필요) <br>
 * @param  {Object} pThis - 해당 Form 
 * @return N/A
 */
pForm.gfnClearInValidComp = function(obj)
{
	if( this.gfn_getType(obj) == "Div" ) {		
		if( this.gfnIsNull(obj.url) ) {			
			this.gfnClearInValidComp(obj.form);
		}
	}
	else if( this.gfn_getType(obj) == "Tab" ) {
		for( var j=0, pages=obj.tabpages.length; j<pages; j++ ) {
			// URL로 링크된 경우에는 해당 링크된 Form Onload에서 처리
			if( this.gfnIsNull(obj.tabpages[j].url) ) {
				this.gfnClearInValidComp(obj.tabpages[j].form);
			}
		}
	}
	else {
		var arrComp = obj.components;	
		for( var i=0; i<arrComp.length; i++ ) {		
			// Division
			if( arrComp[i] instanceof nexacro.Div ) {
				this.gfnClearInValidComp(arrComp[i].form);
			}
			// Tab
			else if (arrComp[i] instanceof nexacro.Tab) {
				for( var j=0, pages=arrComp[i].tabpages.length; j<pages; j++ ) {
					// URL로 링크된 경우에는 해당 링크된 Form Onload에서 처리
					if( this.gfnIsNull(arrComp[i].tabpages[j].url) ) {
						this.gfnClearInValidComp(arrComp[i].tabpages[j].form);
					}
				}
			}
			else {
				if( arrComp[i] instanceof nexacro.Calendar 	// Calendar 처리
				 || arrComp[i] instanceof nexacro.MaskEdit	// MaskEdit 처리
				 || arrComp[i] instanceof nexacro.Combo		// Combo 처리
				 || arrComp[i] instanceof nexacro.Edit		// Edit 처리
				 || arrComp[i] instanceof nexacro.TextArea	// TextArea 처리
				 || arrComp[i] instanceof nexacro.Spin		// Spin 처리
				) {					
					var css = this.gfnNvl(arrComp[i].cssclass, "");					
					if( this.gfnIndexOf(css, "InvalidData") > -1 ) {					
						css = this.gfnReplace(css, "InvalidData", "");					
					}
					else if( this.gfnIndexOf(css, ",InvalidData") > -1 ) {						
						css = this.gfnReplace(css, ",InvalidData", "");					
					}	
					
					arrComp[i].set_cssclass(css);				
				}
			}
		}
	}
};

/**
* @class 	keycode값이 알파벳 || 숫자여부체크
* @param    {String}
* @return   {boolean}* @example  
*           function gfnIsAlphaNumKeycode("112") 
*/
pForm.gfnIsAlphaNumKeycode = function(sKeyCode) {
	if (this.gfnIsNull(sKeyCode)) return;
	
	var isValid = (
					(sKeyCode >=48 && sKeyCode <=57)		// number
					||(sKeyCode >=65 && sKeyCode <=90)		// alphabat
				  );	
	if (isValid) return true;
	else return false;
};


/**
* @class 	Validate 전용 메시지 치환함수
* @param    {String}
* @return   {boolean}* @example  
*/
pForm._gfn_getMsg = function(jsonParam) {
	var msg = jsonParam.msg;
	var arrParam = jsonParam.arrParam;
	
	if( this.gfnIsNull(msg) ){
		alert("[_gfn_getMsg] no msg argument.");
		return "-no message-";
	}
	
	// 반황용 메시지
	var sMsg = msg;
	if( !this.gfnIsNull(arrParam) && arrParam.length ) {
		for( var i=0, cnt=arrParam.length; i<cnt; i++ ) {
			sMsg = sMsg.replace("\{"+i+"\}", arrParam[i]);
		}
	}
	
	if( this.gfnIsNull(sMsg) ){
		alert("[_gfn_getMsg] no sMsg variable.");
		return "-no message-";
	}
	
	sMsg = sMsg.replace("{0}", "");
	if( !this.gfnIsNull(sMsg) )  {
		sMsg = sMsg.replace(/\\n/g, "\n");
	}
	return sMsg;
};
