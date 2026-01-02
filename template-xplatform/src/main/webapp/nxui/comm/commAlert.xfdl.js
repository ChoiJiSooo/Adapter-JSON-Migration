(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("commAlert");
            this.set_titletext("경고창, 확인창");
            this.set_background("transparent");
            this.set_cssclass("frm_POP_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(320,180);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_alert","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_alert");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","100","20",null,"60","100",null,null,null,null,null,this.div_alert.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_alert_Confirm");
            this.div_alert.addChild(obj.name, obj);

            obj = new Button("btn_ok",null,null,"48","24","61","10",null,null,null,null,this.div_alert.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Point2");
            this.div_alert.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,null,"48","24","6","10",null,null,null,null,this.div_alert.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.div_alert.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"8","20","20","10",null,null,null,null,null,this.div_alert.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_POP_X");
            this.div_alert.addChild(obj.name, obj);

            obj = new Static("sta_alert","17","90",null,null,"19","60",null,null,null,null,this.div_alert.form);
            obj.set_taborder("3");
            obj.set_text("시스템오류가 발생하였습니다.관리자에게 문의하시기 바랍니다.");
            obj.set_cssclass("sta_alert_Txt");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            this.div_alert.addChild(obj.name, obj);

            obj = new Static("sta_09","0","389","599","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_GA_guidearea");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_06","1","0","10","399",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_GA_guidearea");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","37",null,"3","669",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_GA_guidearea");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","510","10","358","220",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div_00");
            obj.set_cssclass("div_GD_Tip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00","10","18","100","60",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_alert_Confirm");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","120","18","100","60",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_alert_Error");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_01","10","111","140","90",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_text("★class 교체해서 적용\r\n\r\nsta_alert_Confirm\r\nsta_alert_Error\r\nsta_alert_Warning\r\n");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00","230","18","100","60",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_alert_Warning");
            this.div_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_alert.form
            obj = new Layout("default","",0,0,this.div_alert.form,function(p){});
            this.div_alert.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_00.form
            obj = new Layout("default","",0,0,this.div_00.form,function(p){});
            this.div_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",320,180,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("commAlert.xfdl", function() {
        /**
        *  nps Project (2024)
        *  @FileName 	commAlert
        *  @Creator 	gamsin
        *  @CreateDate 	20124.08.21
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2024.08.21     		gamsin					최초 생성
        *******************************************************************************
        */


        /******************************************************************************************************************************************
        * 폼 전역변수선언 영역
        ******************************************************************************************************************************************/
        this.fv_type 	 = this.gfnGetArgPopup(this, "type"); // alert, confirm
        this.fv_pThis    = this.gfnGetArgPopup(this, "pThis");		// 부모Form
        this.fv_callback = this.gfnGetArgPopup(this, "callback"); 	// 부모콜백
        this.fv_popId	 = this.gfnGetArgPopup(this, "popId");		// 팝업Id

        /******************************************************************************************************************************************
        * 화면 초기셋팅 영역
        ******************************************************************************************************************************************/
        // 화면 초기 로드
        this.form_onload = function(obj,e)
        {
        	// 화면 초기화 함수 호출
        	this.fn_init(obj);

        };

        // 화면 초기화 함수 호출
        this.fn_init = function(obj)
        {
        	var msg = this.gfnGetArgPopup(this, "msg");


        	this.div_alert.form.sta_alert.set_text(msg);


        	// 확인 버튼만
        	if( this.fv_type == "alert" ) {
        		this.div_alert.form.btn_cancel.set_visible(false);
        		this.div_alert.form.btn_ok.setOffsetLeft( this.div_alert.getOffsetWidth() - this.div_alert.form.btn_ok.getOffsetWidth() - 6 );
        	}

        	this.div_alert.form.resetScroll();
        	this.div_alert.form.btn_ok.setFocus();
        };
        /******************************************************************************************************************************************
        * Transaction 함수
        ******************************************************************************************************************************************/

        /******************************************************************************************************************************************
        * 콜백 함수
        ******************************************************************************************************************************************/

        /******************************************************************************************************************************************
        * 사용자 정의 함수
        ******************************************************************************************************************************************/

        /******************************************************************************************************************************************
        * Component 이벤트 함수 (버튼 포함)
        ******************************************************************************************************************************************/
        // 화면 닫기
        this.div_alert_btn_close_onclick = function(obj,e)
        {
        	this.close(false);
        };

        // 확인
        this.div_alert_btn_ok_onclick = function(obj,e)
        {
        	this.close(true);
        };

        // 취소
        this.div_alert_btn_cancel_onclick = function(obj,e)
        {
        	this.close(false);
        };


        // 키이벤트 - alert창인경우, ESC키 창닫기
        this.ModuleAlert_onkeyup = function(obj,e)
        {
        	if( this.fv_type == "alert" && e.keycode == 27 ){
        		this.close(false);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeyup",this.ModuleAlert_onkeyup,this);
            this.div_alert.form.btn_ok.addEventHandler("onclick",this.div_alert_btn_ok_onclick,this);
            this.div_alert.form.btn_cancel.addEventHandler("onclick",this.div_alert_btn_cancel_onclick,this);
            this.div_alert.form.btn_close.addEventHandler("onclick",this.div_alert_btn_close_onclick,this);
            this.div_alert.form.sta_alert.addEventHandler("onclick",this.div_alert_sta_alert_onclick,this);
            this.div_00.form.sta_00_00_00.addEventHandler("onclick",this.div_00_sta_00_00_00_onclick,this);
            this.div_00.form.sta_00_00_00_00.addEventHandler("onclick",this.div_00_sta_00_00_00_onclick,this);
        };
        this.loadIncludeScript("commAlert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
