/**
*  nps Project (2024)
*  @FileName 	Excel.js 
*  @Creator 	gamsin
*  @CreateDate 	2024.08.08
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2024.08.13     		gamsin					최초 생성    
*******************************************************************************
 ● gfnExportExcel				: 엑셀 내보내기
 ● gfnImportExcel				: 엑셀 가져오기
*/

var pForm  = nexacro.Form.prototype;

pForm.exportUrl = "xeni::XExportImport"; //export URL
pForm.importUrl = "xeni::XImport"; //this.importUrl = "http://localhost/nexacro-xeni/XImport";		// import URL

/**
 * Excel Export
 * @param {arrObjGrid} Export 할 Grid가 들어있는 배열
 * @param {strType} Excel Type (Excel / 한셀)
 * @param {sFileName} 엑셀파일명
 */
pForm.gfnExportExcel = function (arrObjGrid, strType, sFileName)
{
	var exportObj;

	exportObj = new ExcelExportObject("Export00", this); //ExcelExport 객체 생성
	
	// 내보내기 할 엑셀 형식 지정
	if (strType == "Excel") {
		exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
	} else {
		exportObj.set_exporttype(nexacro.ExportTypes.HANCELL2014);
	}

	exportObj.addEventHandler("onsuccess", this._export_onsuccess, this); //onsuccess 이벤트 연결
	exportObj.addEventHandler("onerror", this._export_onerror, this); //onerror 이벤트 연결

	// 하나의 파일에 여러 시트 출력
	var objGrid;
	var i, nMax;
	var strSheetName;
	var strFileName = "ExportData(" + sFileName + ")";

	nMax = arrObjGrid.length;

	for (i = 0; i < nMax; i++) 
	{
		objGrid = arrObjGrid[i];
		strSheetName = "Sheet" + (i + 1);
		exportObj.addExportItem(nexacro.ExportItemTypes.GRID, objGrid, strSheetName + "!A1", "allband", "", "merge");
	}

	exportObj.set_exportfilename(strFileName);
	exportObj.set_exporturl(this.exportUrl);
	exportObj.exportData();
	// exportObj = null;
};



this._export_onsuccess = function (obj, e)
{
	
};

this._export_onerror = function (obj, e)
{

};



/**
 * Excel Import
 * @param {strSheetName} Sheet 명
 * @param {strSheetArea} Sheet 정보
 * @param {strDsName} Dataset Object
 * @param {strType} Excel Type (Excel / 한셀)
 */
this.gfnImportExcel = function (strSheetName, strSheetArea, strDsName, strType)
{
	var importObjExcel,importObjHancell;

	var param2 = strSheetName + "!" + strSheetArea;
	var param3 = strDsName + "=output1";

	if (strType == "Excel") 
	{
		importObjExcel = new ExcelImportObject("Import00", this);
		importObjExcel.set_importurl(this.importUrl);

		importObjExcel.set_importtype(nexacro.ImportTypes.EXCEL2007);

		importObjExcel.addEventHandler("onsuccess", this._import_onsuccess, this);
		importObjExcel.addEventHandler("onerror", this._import_onerror, this);

		importObjExcel.set_importfilemode("local");
		importObjExcel.importData("", param2, param3);

		importObjExcel = null;
	}
	else 
	{
		importObjHancell = new ExcelImportObject("Import01", this);
		importObjHancell.set_importurl(this.importUrl);

		importObjHancell.set_importtype(nexacro.ImportTypes.HANCELL2014);

		importObjHancell.addEventHandler("onsuccess", this.fn_ImportOnSuccess, this);
		importObjHancell.addEventHandler("onerror", this.fn_ImportOnError, this);

		importObjHancell.set_importfilemode("local");
		importObjHancell.importData("", param2, param3);

		importObjHancell = null;
	}
};

this._import_onsuccess = function (obj, e)
{

};

this._import_onerror = function (obj, e)
{

};



