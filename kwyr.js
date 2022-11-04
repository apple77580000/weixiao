/******************************

脚本功能：解锁酷我畅听会员

下载地址：https://apps.apple.com/cn/app/id1058259189

软件版本：9.2.3


提示:如果不能解锁卸载软件重新下载测试

*******************************

[rewrite_local]

^http:\/\/vip1\.kuwo\.cn\/vip\/v2\/user\/vip url script-response-body https://raw.githubusercontent.com/apple77580000/weixiao/main/kwyr.js

^https:\/\/audiobookpay\.kuwo\.cn\/a.p url script-response-body https://raw.githubusercontent.com/apple77580000/weixiao/main/kwyr.js

^http:\/\/tingshu\.kuwo\.cn\/v2\/api\/user\/info url script-response-body https://raw.githubusercontent.com/apple77580000/weixiao/main/kwyr.js


[mitm] 

hostname = vip1.kuwo.cn, audiobookpay.kuwo.cn, tingshu.kuwo.cn

*******************************/

var body=$response.body;
body = body.replace(/vipExpire\":"\d+/g,'vipExpire":"1773925434');
body = body.replace(/vipmExpire\":"\d+/g,'vipmExpire":"1773925434');
body = body.replace(/vipOverSeasExpire\":"\d+/g,'vipOverSeasExpire":"1773925434');
body = body.replace(/vipLuxuryExpire\":"\d+/g,'vipLuxuryExpire":"1773925434');
body = body.replace(/svipExpire\":"\d+/g,'svipExpire":"1773925434');
body = body.replace(/vip3Expire\":"\d+/g,'vip3Expire":"1773925434');
body = body.replace(/experienceExpire\":"\d+/g,'experienceExpire":"1773925434');
body = body.replace(/end\":\d+/g,'end":1773925434');
body = body.replace(/bought_vip\":\d+/g,'bought_vip":1');
body = body.replace(/bought_vip_end\":\d+/g,'bought_vip_end":1773925434');
body = body.replace(/vipType\":\d+/g,'vipType":1');
body = body.replace(/vipExpires\":\d+/g,'vipExpires":1773925434');
body = body.replace(/type\":\d+/g,'type":2');
body = body.replace(/period\":\d+/g,'period":111');
body = body.replace(/autoRenewal\":\w+/g,'autoRenewal":true');
body = body.replace(/isbuyVip\":\d+/g,'isbuyVip":1');
body = body.replace(/luxAutoPayUser\":"\d+/g,'luxAutoPayUser":"1');
body = body.replace(/svipAutoPayUser\":"\d+/g,'svipAutoPayUser":"1');
body = body.replace(/isYearUser\":"\d+/g,'isYearUser":"1');
body = body.replace(/vipmAutoPayUser\":"\d+/g,'vipmAutoPayUser":"1');
body = body.replace(/limitfree\":"\d+/g,'limitfree":"1');
body = body.replace(/playright\":"\d+/g,'playright":"1');
body = body.replace(/downright\":"\d+/g,'downright":"1');
body = body.replace(/policytype\":"\d+/g,'policytype":"1');

$done(body);
