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
                this._setFormPosition(600,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("grd", this);
            obj._setContents("<ColumnInfo><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">8812345678901</Col><Col id=\"Column2\">고칼슘우유 200ml_국산, 우리아이냉장 123</Col></Row><Row><Col id=\"Column1\">8812345678902</Col><Col id=\"Column2\">고칼슘우유 200ml_국산, 우리아이냉장 456</Col></Row><Row><Col id=\"Column1\">8812345678903</Col><Col id=\"Column2\">고칼슘우유 200ml_국산, 우리아이냉장 789</Col></Row><Row><Col id=\"Column1\">8812345678904</Col><Col id=\"Column2\">고칼슘우유 200ml_국산, 우리아이냉장</Col></Row><Row><Col id=\"Column1\">8812345678905</Col><Col id=\"Column2\">고칼슘우유 200ml_국산, 우리아이냉장</Col></Row><Row><Col id=\"Column1\">8812345678906</Col><Col id=\"Column2\">고칼슘우유 200ml_국산, 우리아이냉장</Col></Row><Row><Col id=\"Column1\">8812345678907</Col><Col id=\"Column2\">고칼슘우유 200ml_국산, 우리아이냉장</Col></Row><Row><Col id=\"Column1\">8812345678908</Col><Col id=\"Column2\">고칼슘우유 200ml_국산, 우리아이냉장</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_GRP_ID\" type=\"string\" size=\"20\"/><Column id=\"CD_ID\" type=\"string\" size=\"20\"/><Column id=\"CD_NM\" type=\"string\" size=\"100\"/><Column id=\"CD_ID_NM\" type=\"string\" size=\"123\"/></ColumnInfo><Rows><Row><Col id=\"CD_GRP_ID\">1</Col><Col id=\"CD_ID\">1001</Col><Col id=\"CD_ID_NM\">a</Col><Col id=\"CD_NM\">부산지점</Col></Row><Row><Col id=\"CD_GRP_ID\">1</Col><Col id=\"CD_ID\">6009</Col><Col id=\"CD_NM\">서울북지점</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopBtn","0",null,null,"50","0","0",null,null,null,null,this);
            obj.set_taborder("1");
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

            obj = new Div("div_search","20","20",null,"52","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","82","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_LabelSch");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_XXXX","87","10","282","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_tooltiptext("edit");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"66","30","20","10",null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Search");
            obj.set_text("조회");
            obj.set_fittocontents("width");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static20","20","div_search:0","128","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("그리드타이틀");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","Static20:0",null,null,"20","70",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_list");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"139\"/><Column size=\"278\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"45\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"명칭\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CD_ID\" wordWrap=\"none\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CD_NM\" wordWrap=\"english\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_background("rgba(251,123,123,0.47843137254901963)");
            this.addChild(obj.name, obj);

            obj = new Static("Static54_00",null,"73","160","50","250",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h50");
            obj.set_visible("false");
            obj.set_background("rgba(251,123,123,0.47843137254901963)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_background("rgba(251,123,123,0.47843137254901963)");
            this.addChild(obj.name, obj);

            obj = new Static("Static54_00_00","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_background("rgba(251,123,123,0.47843137254901963)");
            this.addChild(obj.name, obj);

            obj = new Static("Static54_00_00_00",null,null,"300","10","0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_background("rgba(251,123,123,0.47843137254901963)");
            this.addChild(obj.name, obj);

            obj = new Static("Static54_00_01",null,"450","160","50","351",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("h50");
            obj.set_visible("false");
            obj.set_background("rgba(251,123,123,0.47843137254901963)");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 20px 0px 20px");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",600,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Template10.xfdl", function() {
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

        /************************************************************************************************
         * Form 관련 스크립트 영역
         ************************************************************************************************/
        /**
         * 화면 Load 시 Event
         */
        this.form_onload = function(obj,e)
        {
        	var arg1 = this.gfnGetArgPopup(this, "arg1"); // 전달값1
        	var arg2 = this.gfnGetArgPopup(this, "arg2"); // 전달값2
        	var arg3 = this.gfnGetArgPopup(this, "arg3"); // 전달값3

        	trace("넘겨받은 파라미터 arg1 : " + arg1);
        	trace("넘겨받은 파라미터 arg2 : " + arg2);
        	trace("넘겨받은 파라미터 arg3 : " + arg3.saveXML());

        };



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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPopBtn.form.btn00_00.addEventHandler("onclick",this.btn_select_onclick,this);
            this.divPopBtn.form.btn00.addEventHandler("onclick",this.divPopBtn_btn00_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
        };
        this.loadIncludeScript("Template10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
