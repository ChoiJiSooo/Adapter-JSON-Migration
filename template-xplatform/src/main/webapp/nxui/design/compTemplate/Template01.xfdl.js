(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template");
            this.set_titletext("조회+그리드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("da_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1000000000001</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">1000000000002</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">1000000000003</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">1000000000004</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">1000000000005</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">1000000000006</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">1000000000007</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">1000000000008</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">1000000000009</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">1000000000010</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">1000000000011</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rdo", this);
            obj._setContents("<ColumnInfo><Column id=\"lv\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lv\">0</Col><Col id=\"data\">예</Col></Row><Row><Col id=\"lv\">1</Col><Col id=\"data\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"91","25",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("기간달력");
            obj.set_cssclass("sta_WF_LabelSch_P");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","466","10","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("라디오");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","0","50","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("달력");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","678","10","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("콤보");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_XXXX","Static06:5","10","140","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cbo_XXXX_innerdataset = new nexacro.NormalDataset("div_search_form_cbo_XXXX_innerdataset", obj);
            div_search_form_cbo_XXXX_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비소프트</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">넥사크로</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">넥사크로N</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbo_XXXX_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","232","50","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("월달력");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","466","50","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","678","50","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_XXXX","553","10","120","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_value("1");
            obj.set_index("1");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chk_XXXX","553","50","120","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("14세 이상");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_XXXX00","765","50","140","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_tooltiptext("edit");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"66","30","20","10",null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Search");
            obj.set_text("조회");
            obj.set_fittocontents("width");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_00","87","10","305","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("div_00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_url("comm::commCalendarFromTo.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_01","Static04:5","50","140","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_text("div_01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_url("comm::commCalendarMonthDiv.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_00","Static03:5","50","140","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_00",null,null,"30","30","Button00:5","10",null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_Reload");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","141",null,null,"25","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("da_grd");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"34\"/><Column size=\"468\"/><Column size=\"120\"/><Column size=\"63\"/><Column size=\"84\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/><Row size=\"40\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Normal\"/><Cell col=\"2\" text=\"Number\" cssclass=\"essential\"/><Cell col=\"3\" text=\"Text\" cssclass=\"essential\"/><Cell col=\"4\" text=\"Date\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" displaytype=\"text\"/><Cell col=\"1\" style=\"align: ;\" text=\"bind:Column2\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: ;\" text=\"bind:Column1\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: ;\" text=\"bind:Column3\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" style=\"align: ;\" text=\"bind:Column4\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\"/><Cell col=\"2\" colspan=\"3\" style=\"align:right middle;\" text=\"43,843,145\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","0","91","128","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("그리드타이틀");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"0","25",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("w\r\n25");
            obj.set_visible("false");
            obj.set_background("rgba(251,123,123,0.47843137254901963)");
            this.addChild(obj.name, obj);

            obj = new Static("Static54",null,"91","300","15","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.set_background("rgba(251,123,123,0.47843137254901963)");
            this.addChild(obj.name, obj);

            obj = new Static("Static54_00",null,"90","160","50","840",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h50");
            obj.set_visible("false");
            obj.set_background("rgba(251,123,123,0.47843137254901963)");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdBtn",null,"div_search:0","600","50","25",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div_00");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow","30","15","75","30",null,null,null,null,null,null,this.divGrdBtn.form);
            obj.set_taborder("3");
            obj.set_text("행추가");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_AddRow");
            this.divGrdBtn.addChild(obj.name, obj);

            obj = new Button("btnDelRow","111","15","75","30",null,null,null,null,null,null,this.divGrdBtn.form);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_DelRow");
            this.divGrdBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelDown","541","15","103","30",null,null,null,null,null,null,this.divGrdBtn.form);
            obj.set_taborder("0");
            obj.set_text("엑셀업로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelDown");
            this.divGrdBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelUp","419","15","116","30",null,null,null,null,null,null,this.divGrdBtn.form);
            obj.set_taborder("1");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.divGrdBtn.addChild(obj.name, obj);

            obj = new Button("btnCustom","588","25","87","30",null,null,null,null,null,null,this.divGrdBtn.form);
            obj.set_taborder("5");
            obj.set_text("커스텀버튼");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            this.divGrdBtn.addChild(obj.name, obj);

            obj = new Button("btnSave","231","17","64","30",null,null,null,null,null,null,this.divGrdBtn.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_GrdSave");
            this.divGrdBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form.div_00
            obj = new Layout("default","",0,0,this.div_search.form.div_00.form,function(p){});
            this.div_search.form.div_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search.form.div_01
            obj = new Layout("default","",0,0,this.div_search.form.div_01.form,function(p){});
            this.div_search.form.div_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrdBtn.form
            obj = new Layout("default","",0,0,this.divGrdBtn.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("5");
            obj.set_spacing("15px 0px 5px 0px");
            this.divGrdBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comm::commCalendarFromTo.xfdl");
            this._addPreloadList("fdl","comm::commCalendarMonthDiv.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_search.form.rdo_XXXX.addEventHandler("onitemclick",this.Radio00_onitemclick,this);
            this.div_search.form.Button00.addEventHandler("onclick",this.div_search_Button00_onclick,this);
        };
        this.loadIncludeScript("Template01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
