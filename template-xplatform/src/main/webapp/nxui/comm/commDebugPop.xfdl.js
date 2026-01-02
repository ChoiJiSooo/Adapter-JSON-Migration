(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ModuleDebugPop");
            this.set_titletext("디버깅(개발용)");
            this.set_cssclass("frm_POP_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,703);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dataset", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gds", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridDataset", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_components", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_properties", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"FUNCTION\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_variableType", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">LOCAL</Col><Col id=\"NAME\">Local</Col></Row><Row><Col id=\"CODE\">GLOBAL</Col><Col id=\"NAME\">Global</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_variable", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_datasetView", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_detail_td3","20","39",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tableBg_B");
            this.addChild(obj.name, obj);

            obj = new Static("sta_detail_td1","20","10",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tableBg_T");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Local");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","39","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Global");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGDS","123","43","247","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_gds");
            obj.set_codecolumn("NAME");
            obj.set_datacolumn("PATH");
            obj.set_displayrowcount("25");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","798","10","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Grid");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Tab("tabComponent","20","76",null,null,"20","13",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.tabComponent);
            obj.set_text("Dataset");
            this.tabComponent.addChild(obj.name, obj);

            obj = new Grid("grdDataset","0","10",null,null,"0","0",null,null,null,null,this.tabComponent.tabpage1.form);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("ds_gridDataset");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_selecttype("row");
            obj._setContents("<Formats/>");
            this.tabComponent.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.tabComponent);
            obj.set_text("SaveXML");
            this.tabComponent.addChild(obj.name, obj);

            obj = new TextArea("txtSaveXML","0","10",null,null,"0","0",null,null,null,null,this.tabComponent.tabpage2.form);
            obj.set_taborder("0");
            this.tabComponent.tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("tabpage3",this.tabComponent);
            obj.set_text("Dataset To Grid");
            this.tabComponent.addChild(obj.name, obj);

            obj = new TextArea("txtSetGrid","0","10",null,null,"0","0",null,null,null,null,this.tabComponent.tabpage3.form);
            obj.set_taborder("0");
            this.tabComponent.tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("tabpage4",this.tabComponent);
            obj.set_text("Grid Format");
            this.tabComponent.addChild(obj.name, obj);

            obj = new TextArea("txtGridFormat","0","10",null,null,"0","0",null,null,null,null,this.tabComponent.tabpage4.form);
            obj.set_taborder("0");
            this.tabComponent.tabpage4.addChild(obj.name, obj);

            obj = new Static("Static03","798","39","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Component");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGlobal","516","43","219","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnGlobalFilter","373","43","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("필터해제");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_grid","901","14","165","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_grid");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("PATH");
            obj.set_displayrowcount("25");
            obj.set_visible("false");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cboComponents","901","43","165","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_components");
            obj.set_codecolumn("PATH");
            obj.set_datacolumn("NAME");
            obj.set_displayrowcount("25");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboDataset","123","14","247","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_dataset");
            obj.set_codecolumn("PATH");
            obj.set_datacolumn("NAME");
            obj.set_displayrowcount("25");
            this.addChild(obj.name, obj);

            obj = new Edit("edtLocal","516","14","219","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnLocalFilter","373","14","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("필터해제");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tabComponent.tabpage1.form
            obj = new Layout("default","",0,0,this.tabComponent.tabpage1.form,function(p){});
            this.tabComponent.tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabComponent.tabpage2.form
            obj = new Layout("default","",0,0,this.tabComponent.tabpage2.form,function(p){});
            this.tabComponent.tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabComponent.tabpage3.form
            obj = new Layout("default","",0,0,this.tabComponent.tabpage3.form,function(p){});
            this.tabComponent.tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabComponent.tabpage4.form
            obj = new Layout("default","",0,0,this.tabComponent.tabpage4.form,function(p){});
            this.tabComponent.tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tabComponent.tabpage5.form.txtScript","value","ds_properties","FUNCTION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("commDebugPop.xfdl", function() {
        /******************************************************************************************************************************************
        * 01. Form ID   : ModuleDebugPop
        * 02. Form Desc : 디버그 기능 지원
        * 03. Author    : 최병욱
        * 04. Create    : 2023.01.02
        *******************************************************************************************************************************************
        *     수정일     작성자   내용
        *******************************************************************************************************************************************

        /************************************************************************************************
         * 1. FORM 변수 선언 영역
         ************************************************************************************************/
        this.fv_currentCombo = "cboDataset"; // 현재선택이 로컬데이터셋인지 / GDS인지의 구분처리
        this.fv_oApp = nexacro.getApplication();
        this.fv_workArea ="div_work.form.";

        /************************************************************************************************
         * 2. FORM EVENT 영역(onload)
         ************************************************************************************************/
        // 화면 로딩시 셋팅
        this.form_onload = function (obj, e)
        {
            // Form Load 시 공통 기능 처리
        	this.gfnLoadForm(obj);
        	this.fn_init(obj);
        };

        // 초기 셋틍
        this.fn_init = function(obj)
        {
        	// 로컬 데이터셋을 가져온다.
            this.fn_saveDatasetList(this.opener);
            this.cboDataset.set_index(0);
            this.fn_makeDatasetGrid();

            // 글로벌 데이터셋을 가져온다.
            this.fn_saveGdsList();
            this.ds_gds.set_keystring("S:NAME");

            // 화면의 GRID의 목록을 가져온다.
            this.fn_saveGridList(this.opener);
            this.cbo_grid.set_index(0);

            // 화면의 컴포넌트의 목록을 가져온다.
            this.fn_saveComponetsList(this.opener);
            this.cboComponents.set_index(0);

            // 화면에서 사용되는 변수목록을 가져온다.
            this.ds_variable.clearData();
            this.fn_saveVariableList(this.opener);

            // 글로벌 변수 목록을 가져온다.
            this.fn_saveGlobalVariableList();
            this.ds_variable.set_keystring("S:LVL+NAME");
        }
        /************************************************************************************************
         * 3. TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 4. CALLBACK 함수 처리부분
         ************************************************************************************************/

        /************************************************************************************************
         * 5. 사용자 FUNCTION 영역
         ************************************************************************************************/
        // 화면에서 사용되는 모든 변수를 찾아 데이터셋에 저장한다.
        this.fn_saveVariableList = function (targetObj, fullpath) {
            var sObjType = targetObj + "";

            // 해당 OBJECT의 전역변수를 찾아낸다.
            this.ds_variable.set_enableevent(false);
            for (var name in targetObj) {
                // 폼 변수는 fv로 Naming Rule 정의
                var sVariName = name.substr(0, 2).toUpperCase();
                if (sVariName == "FV") {
                    // 제외처리대상변수명
                    var value = targetObj[name] + "";
                    if (value.indexOf("[object") != -1) continue;
                    if (value.substring(0, 8) == "function") continue;
                    if (!targetObj.hasOwnProperty(name)) continue;

                    // div_work.form. 으로 나오는 걸 잘라낸다. // && (fullpath+"."+name).indexOf("div_work.form.") > -1
                    if (!this.gfnIsNull(fullpath)) {
                        var nRow = this.ds_variable.addRow();
                        var displayname = nexacro.replaceAll(fullpath + "." + name, this.fv_workArea, "");
                        this.ds_variable.setColumn(nRow, "NAME", displayname);
                        this.ds_variable.setColumn(nRow, "VALUE", value);
                        this.ds_variable.setColumn(nRow, "TYPE", "LOCAL");
                        this.ds_variable.setColumn(nRow, "LVL", name.split(".").length);
                    }
                }
            }
            this.ds_variable.set_enableevent(true);

            // 해당 폼의 하위 OBJECT에 대한 변수도 같이 찾아온다.
            var sObjType;
            var objList = targetObj.components;
            for (var i = 0; i < objList.length; i++) {
                sObjType = objList[i] + "";

                // Div
                if (sObjType == "[object Div]") {
                    if (this.gfnIsNull(fullpath))
                        this.fn_saveVariableList(objList[i].form, objList[i].name + ".form");
                    else
                        this.fn_saveVariableList(objList[i].form, fullpath + "." + objList[i].name + ".form");
                }
                // Tab
                else if (sObjType == "[object Tab]") {
                    var tabPageList = objList[i].tabpages;
                    for (var j = 0; j < tabPageList.length; j++) {
                        if (this.gfnIsNull(fullpath))
                            this.fn_saveVariableList(tabPageList[j].form, objList[i].name + tabPageList[j].name + ".form");
                        else
                            this.fn_saveVariableList(tabPageList[j].form, fullpath + "." + objList[i].name + tabPageList[j].name + ".form");
                    }
                }
            }
        };

        // 글로벌 변수를 찾아 데이터셋에 저장한다.
        this.fn_saveGlobalVariableList = function () {
            var targetObj = this.fv_oApp;

            //var sObjType = targetObj + "";

            // 해당 OBJECT의 전역변수를 찾아낸다.
            this.ds_variable.set_enableevent(false);
            for (var name in targetObj) {
                // 글로벌 변수는 gv로 Naming Rule 정의
                var sVariName = name.substr(0, 2).toUpperCase();
                if (sVariName == "GV") {
                    // 제외처리대상변수명
                    var value = targetObj[name] + "";
                    if (value.indexOf("[object") != -1) continue;
                    if (value.substring(0, 8) == "function") continue;
                    if (!targetObj.hasOwnProperty(name)) continue;

                    // 글로벌 변수는 하나만이 존재하기 때문에..
                    if (this.ds_variable.findRow("NAME", name) == -1) {
                        var nRow = this.ds_variable.addRow();
                        this.ds_variable.setColumn(nRow, "NAME", name);
                        this.ds_variable.setColumn(nRow, "VALUE", value);
                        this.ds_variable.setColumn(nRow, "TYPE", "GLOBAL");
                        this.ds_variable.setColumn(nRow, "LVL", 0);
                    }
                }
            }
            this.ds_variable.set_enableevent(true);
        };

        // 화면의 모든 Object를 저장한다.
        this.fn_saveComponetsList = function (targetObj, fullpath) {
            var sObjType;
            var objList = targetObj.components;
            for (var i = 0; i < objList.length; i++) {
                sObjType = objList[i] + "";

                // Div
                if (sObjType == "[object Div]") {
                    if (this.gfnIsNull(fullpath))
                        this.fn_saveComponetsList(objList[i].form, objList[i].name + ".form");
                    else
                        this.fn_saveComponetsList(objList[i].form, fullpath + "." + objList[i].name + ".form");
                }
                // Tab
                else if (sObjType == "[object Tab]") {
                    var tabPageList = objList[i].tabpages;
                    for (var j = 0; j < tabPageList.length; j++) {

                        if (this.gfnIsNull(fullpath))
                            this.fn_saveComponetsList(tabPageList[j].form, objList[i].name +"."+ tabPageList[j].name + ".form");
                        else
                            this.fn_saveComponetsList(tabPageList[j].form, fullpath + "." + objList[i].name + tabPageList[j].name + ".form");
                    }
                }
                else {
                    // div_work.form. 으로 나오는 걸 잘라낸다.
                    if (!this.gfnIsNull(fullpath)) {
                        var nRow = this.ds_components.addRow();
                        var displayname = nexacro.replaceAll(fullpath + "." + objList[i].name, this.fv_workArea, "");
                        this.ds_components.setColumn(nRow, "NAME", displayname);

                        if (this.gfnIsNull(fullpath))
                            this.ds_components.setColumn(nRow, "PATH", objList[i].name);
                        else
                            this.ds_components.setColumn(nRow, "PATH", fullpath + "." + objList[i].name);
                    }
                }
            }
        };

        // 화면의 그리드목록을 저장한다.
        this.fn_saveGridList = function (targetObj, fullpath) {
            var sObjType;

            var objList = targetObj.components;
            for (var i = 0; i < objList.length; i++) {
                sObjType = objList[i] + "";

                if (objList[i] + "" == "[object Grid]") {
                    var nRow = this.ds_grid.addRow();

                    // div_work.form. 으로 나오는 걸 잘라낸다.
                    var displayname = "";
                    if (this.gfnIsNull(fullpath)) {
                        displayname = nexacro.replaceAll(objList[i].name, this.fv_workArea, "");
                    }
                    else {
                        displayname = nexacro.replaceAll(fullpath + "." + objList[i].name, this.fv_workArea, "");
                    }

                    this.ds_grid.setColumn(nRow, "NAME", displayname);
                    if (this.gfnIsNull(fullpath))
                        this.ds_grid.setColumn(nRow, "PATH", objList[i].name);
                    else
                        this.ds_grid.setColumn(nRow, "PATH", fullpath + "." + objList[i].name);
                }

                // Div
                if (sObjType == "[object Div]") {
                    if (this.gfnIsNull(fullpath))
                        this.fn_saveGridList(objList[i].form, objList[i].name + ".form");
                    else
                        this.fn_saveGridList(objList[i].form, fullpath + "." + objList[i].name + ".form");
                }
                // Tab
                else if (sObjType == "[object Tab]") {
                    var tabPageList = objList[i].tabpages;
                    for (var j = 0; j < tabPageList.length; j++) {
                        if (this.gfnIsNull(fullpath))
                            this.fn_saveGridList(tabPageList[j].form, objList[i].name + "." + tabPageList[j].name + ".form");
                        else
                            this.fn_saveGridList(tabPageList[j].form, fullpath + "." + objList[i].name + tabPageList[j].name + ".form");
                    }
                }
            }
        };

        // 데이터셋의 목록을 찾아 저장한다.
        this.fn_saveDatasetList = function (targetObj, fullpath) {
            var datasetlist = targetObj.objects;
            for (var i = 0; i < datasetlist.length; i++) {
                if (datasetlist[i] + "" == "[object Dataset]") {
                    var nRow = this.ds_dataset.addRow();
                    this.ds_dataset.setColumn(nRow, "NAME", datasetlist[i].id);

                    if (this.gfnIsNull(fullpath)) {
                        this.ds_dataset.setColumn(nRow, "PATH", datasetlist[i].id);
                    }
                    else {
                        // div_work.form. 으로 나오는 걸 잘라낸다.
                        var displayname = nexacro.replaceAll(fullpath + "." + datasetlist[i].id, this.fv_workArea, "");
                        this.ds_dataset.setColumn(nRow, "NAME", displayname);
                        this.ds_dataset.setColumn(nRow, "PATH", fullpath + "." + datasetlist[i].id);
                    }
                }
            }

            var objList = targetObj.components;
            var sObjType;
            for (var i = 0; i < objList.length; i++) {
                sObjType = objList[i] + "";
                // Div
                if (sObjType == "[object Div]") {
                    if (this.gfnIsNull(fullpath))
                        this.fn_saveDatasetList(objList[i].form, objList[i].id + ".form");
                    else
                        this.fn_saveDatasetList(objList[i].form, fullpath + "." + objList[i].id + ".form");
                }
                // Tab
                else if (sObjType == "[object Tab]") {
                    var tabPageList = objList[i].tabpages;
                    for (var j = 0; j < tabPageList.length; j++) {
                        if (this.gfnIsNull(fullpath))
                            this.fn_saveDatasetList(tabPageList[j].form, objList[i].id + tabPageList[j].id + ".form");
                        else
                            this.fn_saveDatasetList(tabPageList[j].form, fullpath + "." + objList[i].id + tabPageList[j].id + ".form");
                    }
                }
            }
        };

        // Dataset을 GRID에 표시한다.
        this.fn_makeDatasetGrid = function () {
            var dataset;

            if (this.fv_currentCombo == "cboDataset") {
                if (this.cboDataset.index == -1) return;

                dataset = eval("this.opener." + this.cboDataset.value);
            }
            else {
                if (this.cboGDS.index == -1) return;

                dataset = this.fv_oApp[this.cboGDS.text];
            }
            this.ds_datasetView.assign(dataset);

            // 데이터셋의 정보가 존재하지 않으면
            if (dataset.getColCount() < 1) {
                var formats = "";
                formats += '<Formats>\n';
                formats += '<Format id="default">\n';
                formats += '<Columns></Columns>\n';
                formats += '<Rows><Row size="24" band="head" /><Row size="24" /></Rows>\n';
                formats += '<Band id="head"></Band>\n';
                formats += '<Band id="body"></Band>\n';
                formats += '</Format>\n';
                formats += '</Formats>';

                this.tabComponent.tabpage1.form.Grid00.set_formats(formats);
                return;
            }

            var columns = '    <Column size="30" />\n';
            var head = '    <Cell col="0" text=""/>\n';
            var body = '    <Cell col="0" displaytype="normal" text="expr:(dataset.getRowType(currow)==2)?\'I\':(dataset.getRowType(currow)==4)?\'M\':(dataset.getRowType(currow)==8)?\'\':\'\'"/>\n';

            for (var i = 0; i < dataset.getColCount(); i++) {
                var columinfo = dataset.getColumnInfo(i);
                var columname = "";
                var columsize = "";
                var columtype = "";

                try {
                    columname = columinfo.name;
                    columsize = parseInt(columinfo.size);
                    columtype = columinfo.type.toUpperCase();
                }
                catch (e) {
                    columname = "undefined";
                    columsize = 50;
                    columtype = "STRING";
                }

                var align = "";

                if (columtype == "STRING") {
                    columsize = columsize * 9;

                    if (columsize < columname.length * 9) {
                        columsize = columname.length * 9;
                    }

                    if (columsize > 200)
                        columns += '    <Column size="200" />\n';
                    else
                        columns += '    <Column size="' + columsize + '" />\n';

                    align = 'style="align:left;"';
                }
                else if (columtype == "INT") {
                    columns += '<Column size="80" />\n';
                    align = 'style="align:right;"';
                }
                else if (columtype == "FLOAT") {
                    columns += '<Column size="80" />\n';
                    align = 'style="align:right;"';
                }
                else if (columtype == "DATE") {
                    columns += '<Column size="88" />\n';
                    align = 'style="align:center;"';
                }
                else if (columtype == "TIME") {
                    columns += '<Column size="88" />\n';
                    align = 'style="align:center;"';
                }
                else if (columtype == "DATETIME") {
                    columns += '<Column size="120" />\n';
                    align = 'style="align:center;"';
                }
                else if (columtype == "BIGDECIMAL") {
                    columns += '<Column size="120" />\n';
                    align = 'style="align:right;"';
                }
                else {
                    columns += '<Column size="120" />\n';
                    align = 'style="align:left;"';
                }

                head += '    <Cell col="' + (i + 1) + '" text="' + columname + '"/>\n';
                body += '    <Cell col="' + (i + 1) + '" ' + align + ' text="bind:' + columname + '" displaytype="normal" edittype="normal"/>\n';
            }

            var formats = "";
            formats += '<Formats>\n';
            formats += '<Format id="default">\n';
            formats += '<Columns>\n' + columns.substring(0, columns.length - 1) + '\n</Columns>\n';
            formats += '<Rows>\n    <Row size="24" band="head" />\n    <Row size="24" />\n</Rows>\n';
            formats += '<Band id="head">\n' + head.substring(0, head.length - 1) + '\n</Band>\n';
            formats += '<Band id="body">\n' + body.substring(0, body.length - 1) + '\n</Band>\n';
            formats += '</Format>\n';
            formats += '</Formats>';

            this.tabComponent.tabpage1.form.grdDataset.set_binddataset(this.ds_datasetView);
            this.tabComponent.tabpage1.form.grdDataset.set_formats(formats);
        };

        // 글로벌 데이터셋 목록을 만든다.
        this.fn_saveGdsList = function () {
            var applicationobj = this.fv_oApp.all;
            for (var i = 0; i < applicationobj.length; i++) {
                if (applicationobj[i] + "" == "[object Dataset]") {
                    try {
                        if (applicationobj[i].id.indexOf(".") == -1) {
                            var nRow = this.ds_gds.addRow();
                            this.ds_gds.setColumn(nRow, "NAME", applicationobj[i].id);
                            this.ds_gds.setColumn(nRow, "PATH", applicationobj[i].id);
                        }
                    }
                    catch (e) {
                        trace(">>>> e Message" + e);
                    }
                }
            }
        };
        /************************************************************************************************
         * 6. 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        // 선택한 TAB에 대한 처리를 한다.
        this.tabComponent_onchanged = function (obj, e) {
            var tabindex = this.tabComponent.tabindex;

            switch (tabindex) {
                case 0: this.fn_makeDatasetGrid(); break;
                case 1: this.fnMakeDatasetXml(); break;
                case 2: this.fn_makeDatasetGridFormat(); break;
                case 3: this.fnMakeGridFormats(); break;
                case 4: this.fnMakeCompoentsData(); break;
                case 5: this.fnMakeVariableList(); break;
                default: break;
            }
        };

        // 데이터셋의 내용을 XML로 표시한다.
        this.fnMakeDatasetXml = function () {
            var dataset;

            if (this.fv_currentCombo == "cboDataset") {
                if (this.cboDataset.index == -1) return;

                dataset = eval("this.opener." + this.cboDataset.value);
            }
            else {
                if (this.cboGDS.index == -1) return;

                dataset = this.fv_oApp[this.cboGDS.text];
            }

            var text = nexacro.replaceAll(dataset.saveXML(), '<Dataset id="' + dataset.id + '">', '');
            text = nexacro.replaceAll(text, '</Dataset>', '');
            this.tabComponent.tabpage2.form.txtSaveXML.set_value(text);
        };

        // 데이터셋을 GRID로 자동생성해준다.
        this.fn_makeDatasetGridFormat = function () {
            this.tabComponent.tabpage3.form.txtSetGrid.set_value(this.tabComponent.tabpage1.form.grdDataset.formats);
        };

        // 화면의 그리드의 포맷을 가져온다.
        this.fnMakeGridFormats = function () {
            if (this.cbo_grid.index == -1) return;

            var targetgrid = eval("this.opener." + this.cbo_grid.value);

            var formats = nexacro.replaceAll(targetgrid.formats, "><", ">\n<");
            formats = nexacro.replaceAll(formats, "<Column ", "    <Column ");
            formats = nexacro.replaceAll(formats, "<Cell ", "    <Cell ");
            formats = nexacro.replaceAll(formats, "<Row ", "    <Row ");

            // 리사이징한 그리드의 현재 컬럼 사이즈를 계산한다.
            var newcolumn = "";
            for (var i = 0; i < targetgrid.getCellCount("Body"); i++) {
                newcolumn += '    <Column size="' + targetgrid.getRealColSize(i, true) + '"/>\n';
            }
            formats = formats.split("<Columns>")[0] + "<Columns>\n" + newcolumn + "</Columns>" + formats.split("</Columns>")[1];

            this.tabComponent.tabpage4.form.txtGridFormat.set_value(formats);
            this.tabComponent.set_tabindex(3);
        };

        // 컴포넌트의 모든속성을 디스플레이한다
        this.fnMakeCompoentsData = function () {
            if (this.cboComponents.index == -1) return;

            var targetobj = eval("this.opener." + this.cboComponents.value);

            this.ds_properties.clearData();
            this.ds_properties.set_enableevent(false);
            for (var name in targetobj) {
                var value = targetobj[name] + "";

                if (name[0] == "_") continue;
                if (value == "[object Object]") continue;
                if (value.substring(0, 8) == "function") continue;
                if (value.substring(0, 7) == "control") continue;

                if (this.gfnIsNull(value)) {
                    var nrow = this.ds_properties.addRow();
                    this.ds_properties.setColumn(nrow, "NAME", name);
                    this.ds_properties.setColumn(nrow, "VALUE", "");
                }
                else {
                    // 이벤트에 대한 처리
                    if (value.indexOf("[object") != -1) {
                        if (value.indexOf("EventListener") != -1) {
                            var eventhandler = targetobj.getEventHandler(name, 0);

                            if (!this.gfnIsNull(eventhandler)) {
                                var nrow = this.ds_properties.addRow();
                                this.ds_properties.setColumn(nrow, "NAME", name);
                                this.ds_properties.setColumn(nrow, "VALUE", "function");
                                this.ds_properties.setColumn(nrow, "FUNCTION", eventhandler);
                                this.ds_properties.setColumn(nrow, "COLOR", "red");
                            }
                        }
                    }
                    else {
                        var nrow = this.ds_properties.addRow();
                        this.ds_properties.setColumn(nrow, "NAME", name);
                        this.ds_properties.setColumn(nrow, "VALUE", value);
                    }
                }
            }
            this.ds_properties.set_enableevent(true);
            this.ds_properties.set_rowposition(0);
        };

        // 화면에서 사용되는 모든 변수를 보여준다.
        this.fnMakeVariableList = function () {
            this.ds_variable.filter("TYPE == '" + this.tabComponent.tabpage6.form.cboVariable.value + "'");
            this.ds_variable.set_rowposition(0);
        };

        // 문장을 스크립트로 실행한다.
        this.fnExecScript = function (obj, e) {
            try {
                var result = eval(this.tabComponent.tabpage7.form.txtScript.text);

                if (this.gfnIsNull(result)) result = "";

                this.tabComponent.tabpage7.form.txtResult.set_value("★★★ 성공 : " + result);
            }
            catch (ex) {
                this.tabComponent.tabpage7.form.txtResult.set_value("＠＠＠ 실패 : " + ex);
            }
        };

        // 로컬 데이터셋 바로 찾기 기능
        this.edtLocal_onkeydown = function (obj, e) {
            if (e.keycode == 13) {
                var nrow = this.ds_dataset.findRow("NAME", obj.value);
                if (nrow != -1) {

                    this.fv_currentCombo = "local";
                    this.cboDataset.set_index(nrow);
                    this.fn_makeDatasetGrid();
                    this.cboDataset_onitemchanged(this.cboDataset);
                }
            }
        };

        // 로컬 데이터셋의 내용을 보여준다.
        this.cboDataset_onitemchanged = function (obj, e) {
            this.fv_currentCombo = obj.name;
            this.edtLocal.set_value(obj.text);
            this.edtGlobal.set_value("");
            this.tabComponent.set_tabindex(0);
            this.tabComponent_onchanged();
        };

        // 글로벌 데이터셋 바로 찾기 기능
        this.edtGlobal_onkeydown = function (obj, e) {
            if (e.keycode == 13) {
                var nrow = this.ds_gds.findRow("NAME", obj.value);
                if (nrow != -1) {
                    this.fv_currentCombo = "global";
                    this.cboGDS.set_index(nrow);
                    this.cboGDS_onitemchanged(this.cboGDS);
                }
            }
        };

        // 글로벌 데이터셋의 내용을 보여준다.
        this.cboGDS_onitemchanged = function (obj, e) {
            this.fv_currentCombo = obj.name;
            this.edtGlobal.set_value(e.postvalue);
            this.edtLocal.set_value("");
            this.tabComponent.set_tabindex(0);
            this.tabComponent_onchanged();
        };

        // 컴포넌트의 모든 속성을 디스플레이한다.
        this.cboComponents_onitemchanged = function (obj, e) {
            this.tabComponent.set_tabindex(4);
            this.tabComponent_onchanged();
        };

        // 변수의 형식을 선택한 타입으로 필터링한다.
        this.tabComponent_tabpage6_cboVariable_onitemchanged = function (obj, e) {
            this.ds_variable.filter("TYPE == '" + this.tabComponent.tabpage6.form.cboVariable.value + "'");
            this.ds_variable.set_rowposition(0);
        };

        // 컴포넌트의 textvalue 값을 클립보드에 복사한다.
        this.combo_onkeydown = function (obj, e) {
            system.clearClipboard();
            system.setClipboard("CF_TEXT", obj.text);
        };

        // 로컬 데이터셋 필터 초기화
        this.btnLocalFilter_onclick = function (obj, e) {
            var dataset = eval("this.opener." + this.cboDataset.value);
            dataset.filter("");
        };

        // 글로벌 데이타셋 필터 초기화
        this.btnGlobalFilter_onclick = function (obj, e) {
            var dataset = this.fv_oApp[this.cboGDS.text];
            dataset.filter("");
        };

        // 닫기
        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.cboGDS.addEventHandler("onkeydown",this.combo_onkeydown,this);
            this.cboGDS.addEventHandler("onitemchanged",this.cboGDS_onitemchanged,this);
            this.tabComponent.addEventHandler("onchanged",this.tabComponent_onchanged,this);
            this.edtGlobal.addEventHandler("onkeydown",this.edtGlobal_onkeydown,this);
            this.btnGlobalFilter.addEventHandler("onclick",this.btnGlobalFilter_onclick,this);
            this.cbo_grid.addEventHandler("onitemchanged",this.fnMakeGridFormats,this);
            this.cbo_grid.addEventHandler("onkeydown",this.combo_onkeydown,this);
            this.cboComponents.addEventHandler("onitemchanged",this.cboComponents_onitemchanged,this);
            this.cboComponents.addEventHandler("onkeydown",this.combo_onkeydown,this);
            this.cboDataset.addEventHandler("onitemchanged",this.cboDataset_onitemchanged,this);
            this.cboDataset.addEventHandler("onkeydown",this.combo_onkeydown,this);
            this.edtLocal.addEventHandler("onkeydown",this.edtLocal_onkeydown,this);
            this.btnLocalFilter.addEventHandler("onclick",this.btnLocalFilter_onclick,this);
        };
        this.loadIncludeScript("commDebugPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
