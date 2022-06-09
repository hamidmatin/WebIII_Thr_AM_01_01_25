/**
 * hfkdhgfkjagdkfljgadkfgadkf
 * @param accordionSelector set selector for select component
 * @param duration duration for transition
 */
const accordion = function (options) {
       
  const defs = { 
    accordionSelector: '.accordion', 
    duration: '300ms', 
    type: 'single' 
  };

  const opts = Object.assign({}, defs, options)
  /**
   * collapse selected content
   * @param {*} content  dnfldfdfjd
   */
  const collapseContent = function (content) {
    content.style.height = null;
  };

  /**
   * expand ssdf
   * @param {*} content
   */
  const expandContent = function (content) {
    let height = content.scrollHeight;
    content.style.height = height + 'px';
  };

  const toggleCollapse = function (content) {
    if (content.style.height) {
      collapseContent(content);
    } else {
      expandContent(content);
    }
  };

  /**
   * all accordion selectd
   */
  const accordions = document.querySelectorAll(opts.accordionSelector);

  for (const accordion of accordions) {
    /******** Content Setting **********/
    const accordionContents = accordion.querySelectorAll('.content');
    for (const accordionContent of accordionContents) {
      accordionContent.style.transitionDuration = opts.duration;
    }
    /******** End ofContent Setting **********/

    /**** Titles Setting ************/
    const accordionTitles = accordion.querySelectorAll('.title');
    for (const accordionTitle of accordionTitles) {
      accordionTitle.onclick = function () {
        if (opts.type === 'single') {
          const activeTitle = accordion.querySelector('.title.active');
          activeTitle.classList.remove('active');
          collapseContent(activeTitle.nextElementSibling);

          this.classList.add('active');
          expandContent(this.nextElementSibling);
        } else if (opts.type === 'multiple') {
          this.classList.toggle('active');
          toggleCollapse(this.nextElementSibling)
        }
        else {
          throw 'type mustbe single or multiple'
        }
      };

      /************/
      if (accordionTitle.classList.contains('active')) {
        expandContent(accordionTitle.nextElementSibling);
      }
      /******* End of Title Setting *************/
    }
  }
};
