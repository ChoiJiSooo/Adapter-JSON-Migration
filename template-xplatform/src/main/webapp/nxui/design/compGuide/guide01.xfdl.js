(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("guide01");
            this.set_titletext("Static/Edit/MaskEdit/TextArea");
            this.set_cssclass("frm_GD_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static03","2","80",null,"300","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_GD_SubBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Component Guide 01");
            obj.set_cssclass("sta_GD_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","80",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static");
            obj.set_cssclass("sta_GD_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","30","Static01:20","185","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("가나다라마바");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","610","150","610","160",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("usedecorate =true\r\n\r\n폰트크기(font size)를 지정 \"12\" <fs v=\'12\'>Text</fs>\r\n폰트색상(font color)를 지정 \"#000000\" <fc v=\'red\'>Text</fc>\r\n폰트종류(font face)를 지정 \"굴림\" <ff v=\'Dotum\'>Text</ff>\r\n굵은(bold) 효과 지정 \"false\" <b v=\'true\'>Text</b>\r\n기울임(italic) 효과 지정 \"false\" <i v=\'true\'>Text</i> \r\n밑줄(under line) 효과 지정 \"false\" <u v=\'true\'>Text</u>");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","Static03:0",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_GD_SubBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","Static03:0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Edit");
            obj.set_cssclass("sta_GD_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","30","465","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Normal");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","30","Static04:5","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("가나다라마바");
            obj.set_text("가나다라마바");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","370","465","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","370","Static04_00:5","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_value("가나다라마바");
            obj.set_text("가나다라마바");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","0","Static03_00:0",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_GD_SubBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","Static03_00:0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_GD_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","30","665","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Normal");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","370","665","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","30","696","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_value("123000");
            obj.set_format("###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","370","696","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_value("123000");
            obj.set_format("###,###");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","710","496","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_value("가나다라마바");
            obj.set_readonly("true");
            obj.set_text("가나다라마바");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01","710","465","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","710","665","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","710","696","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_value("123000");
            obj.set_format("###,###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","0","Static03_00_00:0",null,"300","0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_GD_SubBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0","Static03_00_00:0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_GD_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00","30","865","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Normal");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","370","865","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","710","865","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_GD_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","30","896","140","105",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_value("가나다라마바\n가나다라마바\n가나다라마바\n가나다라마바\n가나다라마바\n가나다라마바\n가나다라마바\n가나다라마바");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00","370","896","140","105",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_value("가나다라마바\n가나다라마바\n가나다라마바\n가나다라마바\n가나다라마바\n가나다라마바\n가나다라마바\n가나다라마바");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00_00","710","896","140","105",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_value("가나다라마바\n가나다라마바\n가나다라마바\n가나다라마바\n가나다라마바\n가나다라마바\n가나다라마바\n가나다라마바");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,650,this,function(p){});
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

        };
        this.loadIncludeScript("guide01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
