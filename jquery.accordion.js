$.fn.accordion = function (opts) {

	var defaults = {
		collapseAll:true,
		showEffect: "slideDown",
		hideEffect: "slideUp",
		collapseAllClass:"collapseAllBtn",
		expandAllClass:"expandAllBtn"

	}

	var self = this,
			options = $.extend(defaults,opts);
	
	$("."+options.expandAllClass).on("click",function(){
		self.find(".content")[options.showEffect]();
		self.data("allcollapsed",false);
	});
	$("."+options.collapseAllClass).on("click",function(){
		self.find(".content")[options.hideEffect]();
		self.data("allcollapsed",true);
	});

  return this.each(function () {
    $this = $item = $(this);
    $allItems = self;
    self.find(".content").hide();
    $this.on("click","h3",function(e){
    	
    	console.log($(this).siblings(".content").is(":visible"));
    	if($(this).siblings(".content").is(":visible")){
    		if(options.collapseAll){
	    		self.find(".content").not($this)[options.hideEffect]();
    		}
    		$(this).siblings(".content")[options.hideEffect]();
    	}else{
    		if(options.collapseAll){
	    		self.find(".content").not($this)[options.hideEffect]();
    		}
    		$(this).siblings(".content")[options.showEffect]();
    	}
    	e.preventDefault();
    });
  });

};