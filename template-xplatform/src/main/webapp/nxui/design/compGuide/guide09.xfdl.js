(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("etc");
            this.set_titletext("Static / etc");
            if (Form == this.constructor)
            {
                this._setFormPosition(1269,1060);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnFavorite","53","199","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Btitle");
            obj.set_defaultbutton("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","btnFavorite:0","200","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("화면타이틀");
            obj.set_cssclass("sta_WF_menuTitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00","sta_00:0","200","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Refresh");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","50","681","560","297",null,null,null,null,null,null,this);
            obj.set_taborder("3");
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

            obj = new Static("Static13","0","157",null,"160","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static14","0","157","115","160",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("텍스트박스");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Spin("Spin00","125","44","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_value("100");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","125","83","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_displayrowcount("5");
            obj.set_text("가나다");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","125","122","122","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_value("20160725");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","382","5","123","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_value("100000");
            obj.getSetter("mask").set("###,###");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","125","161","380","150",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.getSetter("wordwrap").set("char");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","384","44","52","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("남");
            obj.set_value("true");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","446","44","40","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("여");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","384","83","123","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
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
            obj.set_taborder("21");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","382","122","123","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("edt_WF_SchPop");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button91","475","122","30","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_EdtPop");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20","0","0","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label_P");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static23","0","0",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static28","0",null,null,"2","0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Label_Bottom");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","660","681","560","297",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit10","125","5","122","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00","257","0","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02","0","39","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("스핀");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static03","257","39","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static05","0","78","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("콤보");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static06","257","78","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static08","0","117","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static13","0","157",null,"139","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static14","0","157","115","138",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_text("텍스트박스");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Spin("Spin00","125","44","122","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_value("100");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","125","83","122","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_displayrowcount("5");
            obj.set_text("가나다");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","125","122","122","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("11");
            obj.set_value("20160725");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","382","5","123","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("12");
            obj.set_value("100000");
            obj.getSetter("mask").set("###,###");
            this.Div00_00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","125","161","380","150",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("13");
            obj.getSetter("wordwrap").set("char");
            this.Div00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","384","44","52","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("14");
            obj.set_text("남");
            obj.set_value("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","446","44","40","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("15");
            obj.set_text("여");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Radio("Radio00","384","83","123","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_value("1");
            obj.set_index("1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static19","257","117","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("17");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit01","382","122","123","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("18");
            obj.set_cssclass("edt_WF_SchPop");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button91","475","122","30","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_EdtPop");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static20","0","0","115","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("20");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label_P");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static23","0","0",null,"2","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static28","0",null,null,"2","0","0",null,null,null,null,this.Div00_00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_Label_Bottom");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("sta_01","50","607","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div -static Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00","660","606","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div -이미지 Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02","570","200","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("sta_WF_TxtRed");
            obj.set_cssclass("sta_WF_TxtRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00","570","250","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("sta_WF_TxtBlue");
            obj.set_cssclass("sta_WF_TxtBlue");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00_00","570","300","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("sta_WF_TxtGreen");
            obj.set_cssclass("sta_WF_TxtGreen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_01","900","200","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("sta_WF_Txtbold14");
            obj.set_cssclass("sta_WF_Txtbold14");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00_01","900","249","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("sta_WF_Txtbold16");
            obj.set_cssclass("sta_WF_Txtbold16");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00_00_00","900","300","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("sta_WF_Txt24");
            obj.set_cssclass("sta_WF_Txt24");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Component Guide 09");
            obj.set_cssclass("sta_GD_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","80",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Static  : 필요시 적용");
            obj.set_cssclass("sta_GD_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00_00_01","570","349","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("sta_WF_TxtYellow");
            obj.set_cssclass("sta_WF_TxtYellow");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00_00_01_00","570","394","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("sta_WF_TxtGray");
            obj.set_cssclass("sta_WF_TxtGray");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00_00_01_01","570","434","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("sta_WF_TxtOrange");
            obj.set_cssclass("sta_WF_TxtOrange");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00","93","280","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("화면타이틀");
            obj.set_cssclass("sta_WF_Subtitle02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","93","240","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("화면타이틀");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_01","92","320","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("화면타이틀");
            obj.set_cssclass("sta_WF_Subtitle03");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03","76","389","292","42",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("필요한 설명글을 적어서 적용해 주시면 됩니다.\r\n필요한 설명글을 적어서 적용해 주시면 됩니다.");
            obj.set_cssclass("sta_WF_Des");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,function(p){});
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1269,1060,this,function(p){});
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
            this.btnFavorite.addEventHandler("onclick",this.divTitle_btnFavorite_onclick,this);
            this.Div00.form.Radio00.addEventHandler("onitemclick",this.Radio00_onitemclick,this);
            this.Div00_00.form.Radio00.addEventHandler("onitemclick",this.Radio00_onitemclick,this);
        };
        this.loadIncludeScript("guide09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
