;(function($,window,document,undefined){var $win=$(window);var $doc=$(document);var $counters=null
var registrationFormSubmitUrl='';$doc.ready(function(){var $item;$("#carousel ul").carouFredSel({width:"100%",height:"auto",align:"center",circular:"true",pagination:"#pager",items:{start:0,visible:3,minimum:3,width:478},scroll:{items:1,duration:400,onBefore:function(data){$('#carousel li').removeAttr('class')
var firstSlide=$(data.items.visible).eq(0),secondSlide=$(data.items.visible).eq(1),thirdSlide=$(data.items.visible).eq(2)
firstSlide.addClass('first-slide');secondSlide.addClass('second-slide');thirdSlide.addClass('third-slide')},onAfter:function(data){$('#carousel li').removeAttr('class')
var firstSlide=$(data.items.visible).eq(0),secondSlide=$(data.items.visible).eq(1),thirdSlide=$(data.items.visible).eq(2)
firstSlide.addClass('first-slide')
secondSlide.addClass('second-slide')
thirdSlide.addClass('third-slide')}},onCreate:function(data){$('.slide:nth-child(3)',this).addClass('active');var firstSlide=data.items.eq(0),secondSlide=data.items.eq(1),thirdSlide=data.items.eq(2)
firstSlide.addClass('first-slide')
secondSlide.addClass('second-slide')
thirdSlide.addClass('third-slide')},auto:false});$win.on("scroll",function(){if($win.scrollTop()>150){$('.services-alt .service').addClass('visible');}})
$('.fullscreen img').fullscreener();$('.intro-image img').fullscreener();$(".form-join .select").selecter();$(".form-domain select").selecter();$(".form-contacts .select").selecter();$(".form-filter .select").selecter();(function(){var checkedClass='custom-input-checked';var disabledClass='custom-input-disabled';var inputSelector='.custom-checkbox input, .custom-radio input';$(inputSelector).each(function(){var input=this;$(input).parent().toggleClass(checkedClass,input.checked);}).on('change',function(){var input=this;if(input.type==='radio'){var name=input.name;$(input.ownerDocument).find('[name='+name+']').each(function(){var radioInput=this;$(radioInput).parent().toggleClass(checkedClass,radioInput.checked);});}else{$(input).parent().toggleClass(checkedClass,input.checked);};}).on('disable',function(){var input=this;input.disabled=true;$(input).parent().addClass(disabledClass);}).on('enable',function(){var input=this;input.disabled=false;$(input).parent().removeClass(disabledClass);});})();$('.accordion-faq .btn-open').on('click',function(event){var $questionHead=$(this).parent();var $questionBody=$questionHead.next();$questionBody.slideToggle();if($questionBody.is(":visible")){$(this).children('.ico-open').toggleClass('ico-close');$(this).toggleClass('btn-open-alt');}
event.preventDefault();});var subscribeData=[];$('.subscribe-steps').on('submit','form',function(event){event.preventDefault();var $form=$(this);var $step=$form.closest('.section-subscribe');var stepIdx=$step.index();var isLast=$step.hasClass('last-step');var valid=true;$form.find('.required').each(function(){if(this.value===''){valid=false;};});if(valid){var stepData=$(this).serialize();subscribeData[stepIdx]=stepData;$step.addClass('completed');if(isLast){$.ajax({url:registrationFormSubmitUrl,data:subscribeData.join('')});};}else{}});$counters=$('.counter').each(function(){var c=new Counter(this,{countTo:this.getAttribute('data-count-to'),countDuration:this.getAttribute('data-count-duration'),prettify:{round:true,commas:true}});$(this).data('counter',c);});});$win.on('scroll',function(){var scrollTop=$win.scrollTop();var windowHeight=$win.height();$counters.each(function(){var counterTop=$(this).offset().top;if(scrollTop+windowHeight/1.5>counterTop){$(this).data('counter').count();};});});})(jQuery,window,document);