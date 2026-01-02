(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_board", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"regUser\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"data\">Y</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"data\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_voInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"voClass\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"voClass\">egovframework.rte.sample.service.SampleVO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopBtn","0",null,null,"50","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_POP_BtnBg");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","231","17","64","30",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_GrdSave");
            obj.set_visible("true");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnDelRow","111","15","75","30",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_DelRow");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnCustom","588","25","87","30",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("2");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Static("Static00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_background("rgba(251,123,123,0.47843137254901963)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_background("rgba(251,123,123,0.47843137254901963)");
            this.addChild(obj.name, obj);

            obj = new Static("Static54_00_00","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_background("rgba(251,123,123,0.47843137254901963)");
            this.addChild(obj.name, obj);

            obj = new Static("Static54_00_00_00",null,null,"300","10","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_background("rgba(251,123,123,0.47843137254901963)");
            this.addChild(obj.name, obj);

            obj = new Static("Static54_00_01",null,"450","160","50","351",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h50");
            obj.set_visible("false");
            obj.set_background("rgba(251,123,123,0.47843137254901963)");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","20","12","128","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("내용수정");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("Div00",null,"61","535","299","35",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","118",null,"140","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","79",null,"40","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static15","0","40",null,"40","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20","0","40","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("name");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit10","125","45","118","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static13","0","257",null,"39","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static19","0","40",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20_00","0","79","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("Use YN");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20_01","0","118","115","140",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("Description");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20_02","0","257","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("RegUser");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit10_00","125","262","118","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","125","84","118","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_displayrowcount("5");
            obj.set_text("가나다");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","125","122","395","132",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.getSetter("wordwrap").set("char");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static15_00","0","1",null,"40","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20_03","0","1","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("ID");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("ed_id","125","6","118","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static19_00","0","1",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 20px 0px 20px");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",600,430,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Edit10","value","ds_board","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Combo00","value","ds_board","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.TextArea00","value","ds_board","description");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.Edit10_00","value","ds_board","regUser");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.ed_id","value","ds_board","id");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("update.xfdl", function() {
        /***************************************************************************
         * Program ID    : ExamPopupSubM.xfdl
         * Program Name  : 팝업 샘플페이지
         * Author        : 양동주
         * Created On    : 2019.07
         * 개    요 	 :
         *
         * =========================================================================
         * 변경일자     수정자    내    용
         * =========================================================================

         **************************************************************************/
         /************************************************************************************************
         * Form 변수 선언 영역
         ************************************************************************************************/
        this.fv_pThis    = this.gfnGetArgPopup(this, "pThis");		// 부모Form
        this.fv_callback = this.gfnGetArgPopup(this, "callback"); 	// 부모콜백
        this.fv_popId	 = this.gfnGetArgPopup(this, "popupId");	// 팝업Id
        this.fv_popType	 = this.gfnGetArgPopup(this, "popupType");	// 팝업Id
        this.param ;


        /************************************************************************************************
         * Form 관련 스크립트 영역
         ************************************************************************************************/
        /**
         * 화면 Load 시 Event
         */
        this.form_onload = function(obj,e)
        {
        	this.param = this.gfnGetArgPopup(this, "param"); // 전달값1


        	this.ds_param.clearData();
        	var row = this.ds_param.addRow();
        	this.ds_param.setColumn(row, "id", this.param);

        	let option = {};
        	option.svcId 	= "detail";
        	option.svcUrl 	= "egovSampleDetailDS.do";
        	option.inDs 	= "ds_voInfo=ds_voInfo ds_input=ds_param:U";
        	option.outDs 	= "ds_board=ds_output";
        	option.argument = "";
        	option.callback = "fn_callback";
        	this.gfnTransaction(this, option);

        };

        this.fnCallback = function (svcid, errcd, errmsg)
        {
        	if ( svcid == "update" )
        	{
        		alert(errmsg);
        		this.close();
        	}
        	if ( svcid == "delete" )
        	{
        		alert(errmsg);
        		this.close();
        	}
        }


        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/


        /************************************************************************************************
         * 공통버튼 Function 영역
         ************************************************************************************************/


        // 선택
        this.btn_select_onclick = function(obj,e)
        {
        	this.fn_closePopup(this.ds_list.rowposition);
        };


        // 그리드 선택
        this.grd_list_oncelldblclick = function(obj,e)
        {
        	this.fn_closePopup(e.row);
        };


        // 닫기
        this.btn_close_onclick = function(obj,e)
        {
        	this.close(null);
        };


        // 선택닫기
        this.fn_closePopup = function (nRow)
        {
        	// 반환값
        	var oRet = {
        		  CD_ID	: this.ds_list.getColumn(nRow, "CD_ID")
        		, CD_NM	: this.ds_list.getColumn(nRow, "CD_NM")
        		};

        	if(this.fv_popType == "modeless") {
        		this.gfnCloseModalessPopup(this.fv_pThis, this.fv_popId, this.fv_callback, oRet);
        	} else {
        		this.close(JSON.stringify(oRet));
        	}
        }


        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/


        this.divPopBtn_btn00_onclick = function(obj,e)
        {
        	this.close()
        };

        this.divPopBtn_btnSave_onclick = function(obj,e)
        {
        	let option = {};
        	option.svcId 	= "update";
        	option.svcUrl 	= "egovSampleUpdate.do";
        	option.inDs 	= "ds_voInfo=ds_voInfo ds_input=ds_board:U";
        	option.outDs 	= "";
        	option.argument = "";
        	option.callback = "fnCallback";
        	this.gfnTransaction(this, option);
        };

        this.divPopBtn_btnDelRow_onclick = function(obj,e)
        {
        	let option = {};
        	option.svcId 	= "delete";
        	option.svcUrl 	= "egovSampleDelete.do";
        	option.inDs 	= "";
        	option.outDs 	= "";
        	option.argument = "selectedId=" + this.Div00.form.ed_id.value;
        	option.callback = "fnCallback";
        	this.gfnTransaction(this, option);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPopBtn.form.btnSave.addEventHandler("onclick",this.divPopBtn_btnSave_onclick,this);
            this.divPopBtn.form.btnDelRow.addEventHandler("onclick",this.divPopBtn_btnDelRow_onclick,this);
        };
        this.loadIncludeScript("update.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
