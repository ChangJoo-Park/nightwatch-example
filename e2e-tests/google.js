'use strict';
module.exports = {
  'Demo test Google': function(browser) {
    browser.url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .expect.element('input[type=text]')
      .to.be.visible;
    browser.setValue('input[type=text]', '구글')
      .click('button[name=btnG]')
      .expect.element('#ires a:first-child')
      .to.be.visible.after(2000)
      .and.text.to.contain('구글 홈');
    browser.end();
  }
};
