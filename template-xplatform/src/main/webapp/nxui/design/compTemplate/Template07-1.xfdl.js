(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template07");
            this.set_titletext("텝");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,207);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static03","0","0","160","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("디테일타이틀");
            obj.set_cssclass("sta_WF_Subtitle02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","Static03:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0","117",null,"40","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","0","78",null,"40","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","39",null,"40","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static15","0","0",null,"40","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit10","125","5","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","257","0","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","39","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("스핀");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","257","39","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","0","78","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("콤보");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","257","78","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","0","117","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Spin("Spin00","125","44","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_value("100");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","125","83","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_displayrowcount("5");
            obj.set_text("가나다");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","125","122","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_value("20160725");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","382","5","123","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_value("100000");
            obj.getSetter("mask").set("###,###");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","384","44","52","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("남");
            obj.set_value("true");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","446","44","40","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("여");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","384","83","123","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_value("1");
            obj.set_index("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static19","257","117","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","382","122","123","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("edt_WF_SchPop");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button91","475","122","30","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_EdtPop");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static09","515","0","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("리드온니");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","640","5","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","772","0","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("필수");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static11","515","39","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("리드온니");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static12","772","39","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("필수");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static16","515","78","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("리드온니");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static17","772","78","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("필수");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static18","515","117","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("리드온니");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Spin("Spin01","640","44","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_value("100");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo01","640","83","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_displayrowcount("5");
            obj.set_text("가나다");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","640","122","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_value("20160725");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","897","5","136","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_value("100000");
            obj.getSetter("mask").set("###,###");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","899","44","40","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("남");
            obj.set_cssclass("essential");
            obj.set_value("true");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","958","44","40","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("여");
            obj.set_cssclass("essential");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio01","899","83","125","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_value("1");
            obj.set_index("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22","772","117","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_text("필수");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","897","122","136","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_cssclass("edt_WF_SchPop");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","1003","122","30","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_EdtPop");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20","0","0","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label_P");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static23","0","0",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static28","0",null,null,"2","0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Label_Bottom");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("divModuleBtn",null,"0","300","50","0",null,null,null,null,null,this);
            obj.set_taborder("2");
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
            obj.set_visible("false");
            this.divModuleBtn.addChild(obj.name, obj);

            obj = new Button("btn_03_00","83","15","64","30",null,null,null,null,null,null,this.divModuleBtn.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_GrdSave");
            this.divModuleBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divModuleBtn.form
            obj = new Layout("default","",0,0,this.divModuleBtn.form,function(p){});
            obj.set_type("horizontal");
            obj.set_spacing("15px 0px 5px 0px");
            obj.set_horizontalgap("5");
            obj.set_flexmainaxisalign("end");
            this.divModuleBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,207,this,function(p){});
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
            this.Div00.form.Radio00.addEventHandler("onitemclick",this.Radio00_onitemclick,this);
            this.Div00.form.Radio01.addEventHandler("onitemclick",this.Radio00_onitemclick,this);
        };
        this.loadIncludeScript("Template07-1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
