(function() {
    $.fn.lofCountDown = function(options) {
        return this.each(function() {
            new $.lofCountDown(this, options);
        });
    }
    $.lofCountDown = function(obj, options) {

        this.options = $.extend({
            formatStyle: '1',
            autoStart: false,
            LeadingZero: true,
            DisplayFormat: " ",
            FinishMessage: " ",
            CountActive: true,
            TargetDate: null
        }, options || {});
        if (this.options.TargetDate == null || this.options.TargetDate == '') {
            return;
        }
        this.timer = null;
        this.element = obj;
        this.CountStepper = -1;
        this.CountStepper = Math.ceil(this.CountStepper);
        this.SetTimeOutPeriod = (Math.abs(this.CountStepper) - 1) * 1000 + 990;
        var dthen = new Date(this.options.TargetDate);
        var dnow = new Date();
        if (this.CountStepper > 0) {
            ddiff = new Date(dnow - dthen);
        } else {
            ddiff = new Date(dthen - dnow);
        }
        gsecs = Math.floor(ddiff.valueOf() / 1000);
        this.CountBack(gsecs, this);

    };
    $.lofCountDown.fn = $.lofCountDown.prototype;
    $.lofCountDown.fn.extend = $.lofCountDown.extend = $.extend;
    $.lofCountDown.fn.extend({
        calculateDate: function(secs, num1, num2) {
            var s = ((Math.floor(secs / num1)) % num2).toString();
            if (this.options.LeadingZero && s.length < 2) {
                s = "0" + s;
            }
            if (this.options.formatStyle == 1)
                return "<b>" + s + "</b>";
            else if (this.options.formatStyle == 2) {
                var n = s.split("");
                return "<div class=\"countdown_num\"><span>" + n[0] + "</span><span>" + n[1] + "</span></div>";
            }

        },
        CountBack: function(secs, self) {
            if (secs < 0) {
                //$(self.element).siblings('.countdown-labele').append('<img class="expired img-responsive" src="/catalog/view/theme/default/image/expired.png" alt="expired">');
                $(self.element).parent().addClass('expired');
                DisplayStr = self.options.DisplayFormat.replace(/%%D%%/g, '00');
                DisplayStr = DisplayStr.replace(/%%H%%/g, '00');
                DisplayStr = DisplayStr.replace(/%%M%%/g, '00');
                DisplayStr = DisplayStr.replace(/%%S%%/g, '00');
                self.element.innerHTML = DisplayStr;
                return;
            } else if (isNaN(secs) == true) {
                //$(self.element).siblings('.countdown-labele').append('<img class="expired img-responsive" src="/catalog/view/theme/default/image/expired.png" alt="expired">');
                $(self.element).parent().addClass('expired');
                DisplayStr = self.options.DisplayFormat.replace(/%%D%%/g, '00');
                DisplayStr = DisplayStr.replace(/%%H%%/g, '00');
                DisplayStr = DisplayStr.replace(/%%M%%/g, '00');
                DisplayStr = DisplayStr.replace(/%%S%%/g, '00');
                self.element.innerHTML = DisplayStr;
                return;
            }
            clearInterval(self.timer);
            DisplayStr = self.options.DisplayFormat.replace(/%%D%%/g, self.calculateDate(secs, 86400, 100000));
            DisplayStr = DisplayStr.replace(/%%H%%/g, self.calculateDate(secs, 3600, 24));
            DisplayStr = DisplayStr.replace(/%%M%%/g, self.calculateDate(secs, 60, 60));
            DisplayStr = DisplayStr.replace(/%%S%%/g, self.calculateDate(secs, 1, 60));
            self.element.innerHTML = DisplayStr;
            if (self.options.CountActive) {
                self.timer = null;
                self.timer = setTimeout(function() {
                    self.CountBack((secs + self.CountStepper), self);
                }, (self.SetTimeOutPeriod));
            }
        }

    })
})(jQuery)