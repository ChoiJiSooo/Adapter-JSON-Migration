(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("guide06");
            this.set_titletext("Button");
            this.set_cssclass("frm_GD_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCmb", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">선택</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">가나다라</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">가나다라마바</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">가나다라마바</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">가나다라마바</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Component Guide 06");
            obj.set_cssclass("sta_GD_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","0","80",null,"190","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_GD_SubBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","80",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button");
            obj.set_cssclass("sta_GD_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","30","165","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Normal");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","650","165","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","0","270",null,"340","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_GD_SubBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0","270",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Button");
            obj.set_cssclass("sta_GD_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00","30","345","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Module Button");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","650","345","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("etc Button");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","30","201","64","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Button");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01","130","107","174","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("★★ fittocontents =width 적용");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01","156","201","52","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Point");
            obj.set_cssclass("btn_WF_Point2");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","Button03_01:5","201","64","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Button");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Color");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00","0","610",null,"320","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_GD_SubBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00","30","694","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("팝업조회");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","0","610",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Icon Button");
            obj.set_cssclass("sta_GD_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","30","725","227","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("edt_WF_SchPop");
            obj.set_value("edt_WF_SchPop 클래스 적용");
            obj.set_text("edt_WF_SchPop 클래스 적용");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","Edit00:-30","725","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_EdtPop");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00","650","694","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","650","723","227","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("edt_WF_SchPop");
            obj.set_value("edt_WF_SchPop 클래스 적용");
            obj.set_enable("false");
            obj.set_text("edt_WF_SchPop 클래스 적용");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","Edit00_00:-30","723","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_EdtPop");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00_00","0","930",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_GD_SubBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","0","930",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Popup Button");
            obj.set_cssclass("sta_GD_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00_00","30","1014","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Normal");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00_00","648","1014","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","99","201","52","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Point");
            obj.set_cssclass("btn_WF_Point");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_02","156","164","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Point : 필요시 적용");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00_01","29","780","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("조회버튼");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00_01","650","779","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00","30","817","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_Reload");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","btn_00:5","817","66","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_00","650","814","66","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenuToggle",null,"121","14","60","103",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_menuClose");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"181","14","60","103",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_menuOpen");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_02","Button00_01_00:5","201","64","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Button");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00_00_00","0","1130",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_GD_SubBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","0","1130",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Shuttle Button");
            obj.set_cssclass("sta_GD_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","833","200","64","30",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("Button");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Color");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_02_01","Button00_01_00_00:5","200","64","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("Button");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01_00","776","200","52","30",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("Point");
            obj.set_cssclass("btn_WF_Point2");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00","718","200","52","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Point");
            obj.set_cssclass("btn_WF_Point");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","649","200","64","30",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("Button");
            obj.set_fittocontents("width");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00","30","862","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_buttonsize("0 0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01","cal_00:-30","863","30","28",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_Cal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02","30","1228","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("btn_WF_ShuttleL");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02_00","btn_02:5","1228","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("btn_WF_ShuttleD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02_00_00","btn_02_00:5","1228","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("btn_WF_ShuttleU");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02_00_00_00","btn_02_00_00:5","1228","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("btn_WF_ShuttleR");
            this.addChild(obj.name, obj);

            obj = new Button("btn_03_00_00","649","403","48","30",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("닫기");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Close");
            this.addChild(obj.name, obj);

            obj = new Button("btn_03_00_00_00_00","btn_03_00_00:5","403","48","30",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_03_00_00_01","btn_03_00_00_00_00:5","403","48","30",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("확인");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Confirm");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_01","30","510","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("Grid Button");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Div("divGrdBtn","30","540","659","50",null,null,null,null,null,null,this);
            obj.set_taborder("52");
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

            obj = new Div("divModuleBtn","34","391","300","50",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("div_00");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_03","30","15","64","30",null,null,null,null,null,null,this.divModuleBtn.form);
            obj.set_taborder("0");
            obj.set_text("신규");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_New");
            this.divModuleBtn.addChild(obj.name, obj);

            obj = new Button("btn_00","219","15","64","30",null,null,null,null,null,null,this.divModuleBtn.form);
            obj.set_taborder("3");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_Modify");
            obj.set_fittocontents("width");
            this.divModuleBtn.addChild(obj.name, obj);

            obj = new Button("btn_03_00_00_00","136","15","64","30",null,null,null,null,null,null,this.divModuleBtn.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Del");
            this.divModuleBtn.addChild(obj.name, obj);

            obj = new Button("btn_03_00","83","15","64","30",null,null,null,null,null,null,this.divModuleBtn.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_GrdSave");
            this.divModuleBtn.addChild(obj.name, obj);

            obj = new Div("divPopBtn","30",null,null,"50","890","-385",null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("div00");
            obj.set_cssclass("div_POP_BtnBg");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00",null,null,"68","30","20","10",null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_Yes");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btn00",null,null,"68","30","btn00_00:10","10",null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_No");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Div("divPopBtn00","646",null,null,"50","274","-385",null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("div00");
            obj.set_cssclass("div_POP_BtnBg");
            obj.set_enable("false");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00",null,null,"68","30","20","10",null,null,null,null,this.divPopBtn00.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_Yes");
            obj.set_fittocontents("width");
            this.divPopBtn00.addChild(obj.name, obj);

            obj = new Button("btn00",null,null,"68","30","btn00_00:10","10",null,null,null,null,this.divPopBtn00.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_No");
            obj.set_fittocontents("width");
            this.divPopBtn00.addChild(obj.name, obj);

            obj = new Button("btn_03","338","1224","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("btn_WF_Prev");
            this.addChild(obj.name, obj);

            obj = new Button("btn_03_00","378","1224","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("btn_WF_Next");
            this.addChild(obj.name, obj);

            obj = new Button("btn_03_00_01","418","1224","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("btn_WF_End");
            this.addChild(obj.name, obj);

            obj = new Button("btn_03_00_01_00","298","1224","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("btn_WF_Start");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrdBtn.form
            obj = new Layout("default","",0,0,this.divGrdBtn.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("5");
            obj.set_spacing("15px 0px 5px 0px");
            this.divGrdBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divModuleBtn.form
            obj = new Layout("default","",0,0,this.divModuleBtn.form,function(p){});
            obj.set_type("horizontal");
            obj.set_spacing("15px 0px 5px 0px");
            obj.set_horizontalgap("5");
            obj.set_flexmainaxisalign("end");
            this.divModuleBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 20px");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopBtn00.form
            obj = new Layout("default","",0,0,this.divPopBtn00.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 20px");
            this.divPopBtn00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static03_00_00_00_00.addEventHandler("onclick",this.Static03_00_00_00_00_onclick,this);
            this.btnMenuToggle.addEventHandler("onclick",this.btnMenuToggle_onclick,this);
            this.Button00_01_00_00.addEventHandler("onclick",this.Button00_01_00_00_onclick,this);
            this.btn_01.addEventHandler("onclick",this.btn_01_onclick,this);
            this.btn_02_00_00_00.addEventHandler("onclick",this.btn_02_00_00_00_onclick,this);
            this.divPopBtn.form.btn00_00.addEventHandler("onclick",this.btn_select_onclick,this);
            this.divPopBtn.form.btn00.addEventHandler("onclick",this.divPopBtn_btn00_onclick,this);
            this.divPopBtn00.form.btn00_00.addEventHandler("onclick",this.btn_select_onclick,this);
            this.divPopBtn00.form.btn00.addEventHandler("onclick",this.divPopBtn_btn00_onclick,this);
        };
        this.loadIncludeScript("guide06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
