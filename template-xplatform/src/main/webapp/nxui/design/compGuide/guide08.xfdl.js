(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("guide09");
            this.set_titletext("Detail Area");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rdo", this);
            obj._setContents("<ColumnInfo><Column id=\"lv\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lv\">0</Col><Col id=\"data\">예</Col></Row><Row><Col id=\"lv\">1</Col><Col id=\"data\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"80","80",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Component Guide 08");
            obj.set_cssclass("sta_GD_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","80",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Detail Area");
            obj.set_cssclass("sta_GD_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","33","161","495","219",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","78","495","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","39","495","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static15","0","0","495","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20","0","0","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit10","125","5","118","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","252","0","107","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","252","39","107","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","252","78","107","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static13","0","117",null,"39","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Spin("Spin00","125","44","118","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_value("100");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","125","83","118","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_displayrowcount("5");
            obj.set_text("가나다");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","367","5","118","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_value("100000");
            obj.getSetter("mask").set("###,###");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","369","44","42","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("남");
            obj.set_value("true");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","428","44","42","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("여");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","369","83","125","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static19","0","0",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static28","0",null,"495","2",null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Label_Bottom");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20_00","0","39","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("스핀");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20_01","0","78","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("콤보");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20_02","0","117","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit10_00","125","122","118","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","252","117","107","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","367","122","118","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_value("100000");
            obj.getSetter("mask").set("###,###");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static13_00","0","155",null,"39","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20_02_00","0","154","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit10_00_00","125","159","118","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","252","154","107","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","367","159","118","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_value("100000");
            obj.getSetter("mask").set("###,###");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","40","393","1110","297",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0","117",null,"40","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("258");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static04","0","78",null,"40","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("259");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","39",null,"40","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("260");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static15","0","0",null,"40","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("261");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit10","125","5","122","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("262");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00","257","0","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("263");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02","0","39","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("264");
            obj.set_text("스핀");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static03","257","39","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("265");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static05","0","78","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("266");
            obj.set_text("콤보");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static06","257","78","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("267");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static08","0","117","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("268");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static13","0","157",null,"139","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("269");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static14","0","157","115","138",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("270");
            obj.set_text("텍스트박스");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Spin("Spin00","125","44","122","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("271");
            obj.set_value("100");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","125","83","122","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("272");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_displayrowcount("5");
            obj.set_text("가나다");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","125","122","122","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("273");
            obj.set_value("20160725");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","382","5","123","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("274");
            obj.set_value("100000");
            obj.getSetter("mask").set("###,###");
            this.Div00_00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","125","161","380",null,null,"5",null,null,null,null,this.Div00_00.form);
            obj.set_taborder("275");
            obj.getSetter("wordwrap").set("char");
            this.Div00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","384","44","52","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("276");
            obj.set_text("남");
            obj.set_value("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","446","44","40","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("277");
            obj.set_text("여");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Radio("Radio00","384","83","123","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("278");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static19","257","117","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("279");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit01","382","122","123","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("280");
            obj.set_cssclass("edt_WF_SchPop");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static09","515","0","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("282");
            obj.set_text("리드온니");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","640","5","122","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("283");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static10","772","0","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("284");
            obj.set_text("필수");
            obj.set_cssclass("sta_WF_Label_P");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static11","515","39","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("285");
            obj.set_text("리드온니");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static12","772","39","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("286");
            obj.set_text("필수");
            obj.set_cssclass("sta_WF_Label_P");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static16","515","78","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("287");
            obj.set_text("리드온니");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static17","772","78","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("288");
            obj.set_text("필수");
            obj.set_cssclass("sta_WF_Label_P");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static18","515","117","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("289");
            obj.set_text("리드온니");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static21","515","157","115","138",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("290");
            obj.set_text("리드온니");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Spin("Spin01","640","44","122","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("291");
            obj.set_value("100");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo01","640","83","122","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("292");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_displayrowcount("5");
            obj.set_text("가나다");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","640","122","122","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("293");
            obj.set_value("20160725");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","897","5","136","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("294");
            obj.set_value("100000");
            obj.getSetter("mask").set("###,###");
            this.Div00_00.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","640","161",null,"131","5",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("295");
            obj.getSetter("wordwrap").set("char");
            this.Div00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","899","44","40","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("296");
            obj.set_text("남");
            obj.set_value("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","958","44","40","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("297");
            obj.set_text("여");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Radio("Radio01","899","83","125","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("298");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static22","772","117","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("299");
            obj.set_text("필수");
            obj.set_cssclass("sta_WF_Label_P");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit02","897","122","136","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("300");
            obj.set_cssclass("edt_WF_SchPop");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static20","0","0","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("302");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label_P");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static23","0","0",null,"2","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("303");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static28","0",null,null,"2","0","0",null,null,null,null,this.Div00_00.form);
            obj.set_taborder("304");
            obj.set_cssclass("sta_WF_Label_Bottom");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button91","475","122","30","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("281");
            obj.set_cssclass("btn_WF_EdtPop");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00","1003","122","30","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("301");
            obj.set_cssclass("btn_WF_EdtPop");
            this.Div00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,function(p){});
            this.Div00_00.form.addLayout(obj.name, obj);

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
            this.Div00.form.Radio00.addEventHandler("onitemclick",this.Radio00_onitemclick,this);
            this.Div00_00.form.Radio00.addEventHandler("onitemclick",this.Radio00_onitemclick,this);
            this.Div00_00.form.Radio01.addEventHandler("onitemclick",this.Radio00_onitemclick,this);
        };
        this.loadIncludeScript("guide08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
