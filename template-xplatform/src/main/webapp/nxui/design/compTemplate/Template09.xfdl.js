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
            this.set_titletext("그리드 셔틀");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("da_grd", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1000000000001</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">1000000000002</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">1000000000003</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">1000000000004</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">1000000000005</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">1000000000006</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">1000000000007</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">1000000000008</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">1000000000009</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">1000000000010</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">1000000000011</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20160725</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rdo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lv\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lv\">0</Col><Col id=\"data\">선택</Col></Row><Row><Col id=\"lv\">1</Col><Col id=\"data\">미선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tree", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"idx\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"UserData\" type=\"STRING\" size=\"256\"/><Column id=\"Caption\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lev\">0</Col><Col id=\"UserData\">첫번째뎁스</Col><Col id=\"Caption\">첫번째뎁스</Col><Col id=\"idx\">1000</Col></Row><Row><Col id=\"UserData\">두번째뎁스</Col><Col id=\"Caption\">두번째뎁스</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1001</Col></Row><Row><Col id=\"UserData\">세번째뎁스</Col><Col id=\"Caption\">세번째뎁스</Col><Col id=\"lev\">2</Col><Col id=\"idx\">1002</Col></Row><Row><Col id=\"UserData\">두번째뎁스</Col><Col id=\"Caption\">두번째뎁스</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1003</Col></Row><Row><Col id=\"UserData\">세번째뎁스</Col><Col id=\"Caption\">세번째뎁스</Col><Col id=\"lev\">2</Col><Col id=\"idx\">1004</Col></Row><Row><Col id=\"UserData\">두번째뎁스</Col><Col id=\"Caption\">두번째뎁스</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1005</Col></Row><Row><Col id=\"UserData\">세번째뎁스</Col><Col id=\"Caption\">세번째뎁스</Col><Col id=\"lev\">2</Col><Col id=\"idx\">1006</Col></Row><Row><Col id=\"UserData\">두번째뎁스</Col><Col id=\"Caption\">두번째뎁스</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1007</Col></Row><Row><Col id=\"UserData\">세번째뎁스</Col><Col id=\"Caption\">세번째뎁스</Col><Col id=\"lev\">2</Col><Col id=\"idx\">1008</Col></Row><Row><Col id=\"UserData\">세번째뎁스</Col><Col id=\"Caption\">세번째뎁스</Col><Col id=\"lev\">2</Col><Col id=\"idx\">1009</Col></Row><Row><Col id=\"idx\">1010</Col><Col id=\"lev\">2</Col><Col id=\"UserData\">세번째뎁스</Col><Col id=\"Caption\">세번째뎁스</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"91","25",null,null,null,null,null,this);
            obj.set_taborder("0");
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
            obj.set_value("1");
            obj.set_index("1");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chk_XXXX","553","50","120","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("65");
            obj.set_text("14세 이상");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_XXXX00","765","50","140","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("67");
            obj.set_tooltiptext("edit");
            this.div_search.addChild(obj.name, obj);

            obj = new Spin("spn_XXXX","765","10","141","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("68");
            obj.set_value("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"66","30","20","10",null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_Search");
            obj.set_text("조회");
            obj.set_fittocontents("width");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_00",null,null,"30","30","Button00:5","10",null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_Reload");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static54",null,"91","300","15","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.set_background("rgba(251,123,123,0.47843137254901963)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"0","25",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w\r\n25");
            obj.set_visible("false");
            obj.set_background("rgba(251,123,123,0.47843137254901963)");
            this.addChild(obj.name, obj);

            obj = new Static("Static54_00",null,"90","160","50","840",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h50");
            obj.set_visible("false");
            obj.set_background("rgba(251,123,123,0.47843137254901963)");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","91","123","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("그리드타이틀");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","0","Static03_00:0","450",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div_00");
            obj.set_cssclass("div_WF_Border");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03","20","10",null,"28","20",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("필요한 설명글을 적어서 적용해 주시면 됩니다.");
            obj.set_cssclass("sta_WF_Des");
            this.div_00.addChild(obj.name, obj);

            obj = new Grid("Grid01","30","sta_03:10",null,null,"30","20",null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_tree");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("false");
            obj.set_cssclass("grd_WF_Tree");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"286\"/></Columns><Rows><Row size=\"35\"/></Rows><Band id=\"body\" style=\"cellline:0 none;\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:UserData\" treelevel=\"bind:lev\"/></Band></Format></Formats>");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_00","div_00:20","335","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_ShuttleL");
            this.addChild(obj.name, obj);

            obj = new Div("div_00_00","btn_00:20","141","450",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div_00");
            obj.set_cssclass("div_WF_Border");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","30","48",null,null,"30","20",null,null,null,null,this.div_00_00.form);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_tree");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("false");
            obj.set_cssclass("grd_WF_Tree");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"286\"/></Columns><Rows><Row size=\"35\"/></Rows><Band id=\"body\" style=\"cellline:0 none;\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:UserData\" treelevel=\"bind:lev\"/></Band></Format></Formats>");
            this.div_00_00.addChild(obj.name, obj);

            obj = new Div("divModuleBtn",null,"0","300","50","30",null,null,null,null,null,this.div_00_00.form);
            obj.set_taborder("1");
            obj.set_text("div_00");
            obj.set_formscrollbartype("none none");
            this.div_00_00.addChild(obj.name, obj);

            obj = new Button("btn_03","30","15","64","30",null,null,null,null,null,null,this.div_00_00.form.divModuleBtn.form);
            obj.set_taborder("0");
            obj.set_text("신규");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_New");
            obj.set_visible("false");
            this.div_00_00.form.divModuleBtn.addChild(obj.name, obj);

            obj = new Button("btn_00","219","15","64","30",null,null,null,null,null,null,this.div_00_00.form.divModuleBtn.form);
            obj.set_taborder("3");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_Modify");
            obj.set_fittocontents("width");
            this.div_00_00.form.divModuleBtn.addChild(obj.name, obj);

            obj = new Button("btn_03_00_00_00","136","15","64","30",null,null,null,null,null,null,this.div_00_00.form.divModuleBtn.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Del");
            obj.set_visible("false");
            this.div_00_00.form.divModuleBtn.addChild(obj.name, obj);

            obj = new Button("btn_03_00","83","15","64","30",null,null,null,null,null,null,this.div_00_00.form.divModuleBtn.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_GrdSave");
            this.div_00_00.form.divModuleBtn.addChild(obj.name, obj);

            obj = new Button("btn_00_00","div_00:20","385","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_ShuttleR");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_00.form
            obj = new Layout("default","",0,0,this.div_00.form,function(p){});
            this.div_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_00_00.form.divModuleBtn.form
            obj = new Layout("default","",0,0,this.div_00_00.form.divModuleBtn.form,function(p){});
            obj.set_type("horizontal");
            obj.set_spacing("15px 0px 5px 0px");
            obj.set_horizontalgap("5");
            obj.set_flexmainaxisalign("end");
            this.div_00_00.form.divModuleBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_00_00.form
            obj = new Layout("default","",0,0,this.div_00_00.form,function(p){});
            this.div_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,600,this,function(p){});
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
            this.btn_00_00.addEventHandler("onclick",this.btn_00_00_onclick,this);
        };
        this.loadIncludeScript("Template09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
