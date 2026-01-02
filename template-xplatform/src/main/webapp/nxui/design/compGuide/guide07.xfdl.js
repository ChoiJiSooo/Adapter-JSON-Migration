(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("guide08");
            this.set_titletext("Search Area");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,730);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rdo", this);
            obj._setContents("<ColumnInfo><Column id=\"lv\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lv\">0</Col><Col id=\"data\">예</Col></Row><Row><Col id=\"lv\">1</Col><Col id=\"data\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static03_00_00","0","80",null,"650","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_GD_SubBg");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","40","280",null,"91","85",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("45");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch_P");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_XXXX","87","10","140","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("46");
            obj.set_tooltiptext("edit");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","232","10","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("47");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","466","10","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("49");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","0","50","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("51");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","232","50","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("53");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","466","50","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("55");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","678","10","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","678","50","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("59");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_XXXX","87","50","140","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("61");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new MaskEdit("msk_XXXX","319","10","142","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("62");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_XXXX","319","50","142","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("63");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_XXXX","553","10","120","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("64");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chk_XXXX","553","50","120","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("65");
            obj.set_text("14세 이상");
            obj.set_value("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_XXXX00","765","50","140","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("67");
            obj.set_tooltiptext("edit");
            this.div_search.addChild(obj.name, obj);

            obj = new Spin("spn_XXXX","765","10","141","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("68");
            obj.set_value("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"72","30","20","10",null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_Search");
            obj.set_text("조회");
            obj.set_fittocontents("width");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_00",null,null,"30","30","Button00:5","10",null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_Reload");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Component Guide 07");
            obj.set_cssclass("sta_GD_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","80",null,"80","-80",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Search Area");
            obj.set_cssclass("sta_GD_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_search00","40","180",null,"52","85",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","82","30",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("1");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch_P");
            this.div_search00.addChild(obj.name, obj);

            obj = new Edit("edt_XXXX","87","10","140","30",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("2");
            obj.set_tooltiptext("edit");
            this.div_search00.addChild(obj.name, obj);

            obj = new Static("Static01","232","10","82","30",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("3");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search00.addChild(obj.name, obj);

            obj = new Static("Static02","466","10","82","30",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("4");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search00.addChild(obj.name, obj);

            obj = new Static("Static06","678","10","82","30",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("5");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search00.addChild(obj.name, obj);

            obj = new MaskEdit("msk_XXXX","319","10","142","30",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("6");
            this.div_search00.addChild(obj.name, obj);

            obj = new Radio("rdo_XXXX","553","10","120","30",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search00.addChild(obj.name, obj);

            obj = new Spin("spn_XXXX","765","10","141","30",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("8");
            obj.set_value("0");
            this.div_search00.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"69","30","20","10",null,null,null,null,this.div_search00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Search");
            obj.set_text("조회");
            obj.set_fittocontents("width");
            this.div_search00.addChild(obj.name, obj);

            obj = new Button("btn_00",null,null,"30","30","Button00:5","10",null,null,null,null,this.div_search00.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Reload");
            this.div_search00.addChild(obj.name, obj);

            obj = new Div("div_search00_00","40","430",null,"132","85",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","82","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("45");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch_P");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new Edit("edt_XXXX","87","10","140","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("46");
            obj.set_tooltiptext("edit");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new Static("Static01","232","10","82","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("47");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new Static("Static02","466","10","82","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("49");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new Static("Static03","0","50","82","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("51");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new Static("Static04","232","50","82","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("53");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new Static("Static05","466","50","82","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("55");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new Static("Static06","678","10","82","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("57");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new Static("Static07","678","50","82","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("59");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new Combo("cbo_XXXX","87","50","140","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("61");
            obj.set_text("Combo00");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new MaskEdit("msk_XXXX","319","10","142","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("62");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_XXXX","319","50","142","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("63");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new Radio("rdo_XXXX","553","10","120","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("64");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new CheckBox("chk_XXXX","553","50","120","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("65");
            obj.set_text("14세 이상");
            obj.set_value("true");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new Edit("edt_XXXX00","765","50","140","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("67");
            obj.set_tooltiptext("edit");
            obj.set_cssclass("essential");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new Spin("spn_XXXX","765","10","141","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("68");
            obj.set_value("0");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"72","30","20","10",null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_Search");
            obj.set_text("조회");
            obj.set_fittocontents("width");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new Edit("edt_XXXX00_00","765","90","140","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("17");
            obj.set_tooltiptext("edit");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new Static("Static07_00","678","90","82","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("18");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new CheckBox("chk_XXXX00","553","90","120","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("19");
            obj.set_text("14세 이상");
            obj.set_value("true");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new Static("Static05_00","466","90","82","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("20");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_XXXX00","319","90","142","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("21");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new Static("Static04_00","232","90","82","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("22");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new Combo("cbo_XXXX00","87","90","140","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("23");
            obj.set_text("Combo00");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","90","82","30",null,null,null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("24");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search00_00.addChild(obj.name, obj);

            obj = new Button("btn_00",null,null,"30","30","Button00:5","10",null,null,null,null,this.div_search00_00.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_Reload");
            this.div_search00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search00.form
            obj = new Layout("default","",0,0,this.div_search00.form,function(p){});
            this.div_search00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search00_00.form
            obj = new Layout("default","",0,0,this.div_search00_00.form,function(p){});
            this.div_search00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,730,this,function(p){});
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
            this.div_search.form.rdo_XXXX.addEventHandler("onitemclick",this.Radio00_onitemclick,this);
            this.div_search00.form.rdo_XXXX.addEventHandler("onitemclick",this.Radio00_onitemclick,this);
            this.div_search00.form.Button00.addEventHandler("onclick",this.div_search00_Button00_onclick,this);
            this.div_search00_00.form.rdo_XXXX.addEventHandler("onitemclick",this.Radio00_onitemclick,this);
        };
        this.loadIncludeScript("guide07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
