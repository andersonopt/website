function fileClosure() {
  
  const page = document;
  
  function elem(selector, context = document){
    let elem = context.querySelector(selector);
    return elem != false ? elem : false;
  }
  
  function elems(selector, context = document) {
    let elems = context.querySelectorAll(selector);
    return elems.length ? elems : false; 
  }
  
  function pushClass(el, targetClass) {
    // equivalent to addClass
    if (el && typeof el == 'object' && targetClass) {
      const elClass = el.classList;
      elClass.contains(targetClass) ? false : elClass.add(targetClass);
    }
  }
  
  function deleteClass(el, targetClass) {
    // equivalent to removeClass
    if (el && typeof el == 'object' && targetClass) {
      const elClass = el.classList;
      elClass.contains(targetClass) ? elClass.remove(targetClass) : false;
    }
  }
  
  function modifyClass(el, targetClass) {
    // equivalent to toggleClass
    if (el && typeof el == 'object' && targetClass) {
      const elClass = el.classList;
      elClass.contains(targetClass) ? elClass.remove(targetClass) : elClass.add(targetClass);
    }
  }
  
  function containsClass(el, targetClass) {
    if (el && typeof el == 'object' && targetClass) {
      return el.classList.contains(targetClass) ? true : false;
    }
  }
  
  function createEl(element = 'div') {
    return document.createElement(element);
  }
  
  function wrapElement(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  }
  
  (function decorateContacts() {
    let contacts = elems('.contact');
    if (contacts) {
      contacts.forEach(contact => {
        let icons = contact.querySelectorAll('img');
        icons.forEach(icon => {
          let heading = icon.parentNode;
          pushClass(heading, 'contact_decorate');
          pushClass(icon, 'contact_icon');
        }); 
      });
    }
  })();
  
  (function() {
    let items = elems('.share_item');
    
    (function shareItem() {
      const copyToClipboard = str => {
        const el = document.createElement('textarea');  // Create a <textarea> element
        el.value = str;                                 // Set its value to the string that you want copied
        el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
        el.style.position = 'absolute';                 
        el.style.left = '-9999px';                      // Move outside the screen to make it invisible
        document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
        const selected =            
        document.getSelection().rangeCount > 0        // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0)     // Store selection if found
        : false;                                    // Mark as false to know no selection existed before
        el.select();                                    // Select the <textarea> content
        document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
        document.body.removeChild(el);                  // Remove the <textarea> element
        if (selected) {                                 // If a selection existed before copying
          document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
          document.getSelection().addRange(selected);   // Restore the original selection
        }
        const copyText = document.createElement('div');
        copyText.classList.add('share_copy');
        copyText.innerText = 'Link Copied';
        // check if there's another notification
        let shareItems = Array.from(elem('.share').children);
        let shareLength = shareItems.length;
        let lastIndex = shareLength - 1;
        let lastShareItem = shareItems[lastIndex];
        const copiedClass = 'share_copy';
        const isCopied = containsClass(lastShareItem.lastElementChild, copiedClass);
        if(!isCopied) {
          lastShareItem.appendChild(copyText);
          setTimeout(function() { 
            lastShareItem.removeChild(copyText)
          }, 2000);
        }
      };
      
      elem('main').addEventListener('click', function(event) {
        let shareTrigger = event.target.closest('.share_item');
        if(shareTrigger) {
          let copyclass = shareTrigger.classList.contains('copy') ? true : false;
          let shareSrc = shareTrigger.href;
          event.preventDefault();
          if(copyclass) {
            copyToClipboard(shareSrc);
          } else {
            window.open(shareSrc, 'mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
          }
        }
      });
    })();
  })();
  
  (function autoResizeTextField() {
    
    let textFields = elems('textarea');
    if (textFields) {
      textFields.forEach(function(textField){
        autosize(textField);
      })
    }
  })();
  
  function smoothScroll(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;
    
    setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
    }, 10);
  }
  
  (function showContacts() {
    let contact = document.querySelector('#contact');
    let contactButton = document.querySelector('.contact_btn');
    if(contactButton) {
      contactButton.addEventListener('click', function() {
        contact ? smoothScroll(document.body, contact.offsetTop, 600) : false;
      });
    }
  })();
  
  (function updateDate() {
    var date = new Date();
    var year = date.getFullYear();
    elem('.year').innerHTML = year;
  })();
  
  (function menu() {
    let button, drop, fancy, main, menu, open, top;
    button = 'nav_toggle';
    drop = 'nav_xs';
    fancy = 'nav_fancy';
    open = 'open';
    
    main = elem('main');
    navs = elems('.nav_menu');
    top = elem('.nav_top');
    let footer = elem('.footer');
    
    function modifyMenu() {
      modifyClass(main, open); 
      modifyClass(footer, open); 
      navs.forEach(function(nav){
        modifyClass(nav, fancy); 
      });
      modifyClass(top, drop);
    }
    
    page.addEventListener('click', function(event) {
      let target = event.target;
      let isOnContent = target.closest(`.${open}`);
      let isOnButton = target.closest(`.${button}`) || containsClass(target, button);
      isOnContent && !isOnButton ? modifyMenu() : false;
      isOnButton  ? modifyMenu() : false;
    });
     
  })();
  
  function countries(list, node) {
    list.forEach(function(country){
      let option = document.createElement('option');
      option.textContent = country;
      option.value = country;
      node.appendChild(option);
    });
  }
  
  (function populateOptions() {
    let field = elem('.form_country');
    field ? countries(formCountries, field) : false;
  })();
  
  function formFeedBack(parent, success = false) {
    let bold, modal, icon, clipBoard, title, message, messages;
    messages = {
      success: {
        title: "Message sent!",
        message: "Thank you for contacting us. You'll hear from us soon.",
        icon: "icon-success.png"
      },
      failure: {
        title: "Something's wrong ...",
        message: "<a href = 'mailto:info@expeditions.co.ke'<u>Contact us</u></a> directly and we'll get you set up in no time.",
        icon: "icon-failure.png"
      }
    }
    let feedback = success ? messages.success : messages.failure;
    let modalClass = 'modal';
    
    modal = createEl();
    modal.className = modalClass;
    clipBoard = createEl();
    title = createEl('h3');
    title.textContent = feedback.title;
    bold = createEl('strong');
    bold.innerHTML = feedback.message;
    message = createEl('p')
    message.appendChild(bold);
    icon = createEl('img');
    icon.src = `/icons/${feedback.icon}`;
    icon.className = 'modal_icon';
    
    clipBoard.appendChild(icon);
    clipBoard.appendChild(title);
    clipBoard.appendChild(message);
    modal.appendChild(clipBoard);
    
    // append modal only once
    // parent node
    let node = parent.parentNode;
    let children = node.children;
    let hasModal = containsClass(children[children.length - 1], modalClass);
    
    if (!hasModal) {
      node.appendChild(modal);
      window.scrollTo(0, 201);
    } 
    
  }
  
  function formValues(form) {
    const isValidElement = element => {
      return element.name && element.value;
    };
    
    const isValidValue = element => {
      return (!['checkbox', 'radio'].includes(element.type) || element.checked);
    };
    
    const isCheckbox = element => element.type === 'checkbox';
    const isMultiSelect = element => element.options && element.multiple;
    
    const getSelectValues = options => [].reduce.call(options, (values, option) => {
      return option.selected ? values.concat(option.value) : values;
    }, []);
    
    const formToJSON = elements => [].reduce.call(elements, (data, element) => {
      if (isValidElement(element) && isValidValue(element)) {
        if (isCheckbox(element)) {
          data[element.name] = (data[element.name] || []).concat(element.value);
        } else if (isMultiSelect(element)) {
          data[element.name] = getSelectValues(element);
        } else {
          data[element.name] = element.value;
        }
      }
      let referrer = document.referrer;
      referrer ? data.from  = referrer : "self";
      return data;
    }, {});
    
    const data = formToJSON(form.elements);
    return JSON.stringify(data, null, "  ");
    
  }
  
  function submitSignUp(form) {
    let formAction = 'https://getform.io/f/febe942a-1be-418e-a138-286e9e8';
    
    let data = formValues(form);
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: data
    }
    
    fetch(formAction, options)
    .then(response => response.text())
    .then(() => {
      formFeedBack(form, true);
    })
    .catch(() => {
      formFeedBack(form)
    });
  }
  
  (function handleForm() {
    // request options
    let formID = '.form';
    let forms = elems(formID);
    
    if(forms) {
      const form = forms[0];
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        submitSignUp(form);
        return false;
      });
    }
  })();
  
  const tableOfContents = elem('#TableOfContents');

  function getLinkId(link) {
    link = link.href;
    let truncateEnd = link.length - 1;
    let truncateStart = link.indexOf('#');
    const id = link.substr(truncateStart, truncateEnd);
    return id
  }

  (function supportTopics() {
    const topicTitle = '.topic_title';
    const heading = 'topic_heading';
    const topicOpen = 'topic_open';
    let topics = elems('.topic');
    if (topics) {
      topics.forEach(function(topic){
        let topicItems = topic.children
        let firstTopicTitle = topicItems[0];
        pushClass(firstTopicTitle, topicOpen)
        let previous = topic.previousElementSibling;
        let hasHeading = previous.matches('h2');
        hasHeading ? pushClass(previous, heading) : false; 
        let id = hasHeading ? previous.id : false; 

        let tocLinks = Array.from(elems('a', tableOfContents));
        let actionableLink = tocLinks.filter(function(link){
          let linkId = getLinkId(link);
          return linkId == `#${id}`;
        })[0];
        
        actionableLink.dataset.items = topicItems.length / 2;
        pushClass(actionableLink, 'toc_tally');
      });

    }

    page.addEventListener('click', function(event){
      let target = event.target
      let isActionable = target.matches(topicTitle);
      if(isActionable) {
        let openTopic = Array.from(target.parentNode.children).filter(function(sibling){
          return sibling.matches(`.${topicOpen}`);
        });
        modifyClass(openTopic[0], topicOpen);
        openTopic[0] == target ? false :  modifyClass(target, topicOpen);
      }
    })
  })();
  
  if(tableOfContents) {
    pushClass(tableOfContents, 'toc');
    const listItems = Array.from(elems('li', tableOfContents));
    
    listItems.forEach(function(item){
      hasNestedList = elem('ul', item) ? true : false;
      hasNestedList ? pushClass(item, 'toc_hassub') : false;
    })
    
    const listLinks = Array.from(elems('a', tableOfContents));
    const listIds = listLinks.map(function(link){
      const id = getLinkId(link);
      return id
    });
    
    let tocPositions = Object.create(null);
    let flatPositions = []
    
    listIds.map(function(id){
      let heading = elem(id);
      let offset = heading.offsetTop
      tocPositions[id] = offset;
      flatPositions.push(offset);
    });
    
    
    listLinks.forEach(function(link){
      pushClass(link, 'toc_item');
      const id = getLinkId(link);
      link.dataset.position = tocPositions[id]
    });
    
    page.addEventListener('click', function(event){
      let target = event.target;
      let navHeight = elem('.nav_wrap').offsetHeight + 12;
      if(target.matches('.toc_item')){
        setTimeout(function(){
          let position = window.scrollY
          window.scroll({
            top: (position - navHeight),
            behavior: 'smooth'
          });
        }, 500);
      }
    });
    function closestInt(goal, collection) {
      const closest = collection.reduce(function(prev, curr) {
        return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
      });
      return closest
    }
    
    function activeHeading(position) {
      let active = 'toc_active';
      const toModify = listLinks.filter(function(link){
        let currentHeading = containsClass(link, active);
        let newPosition = parseInt(link.dataset.position)
        return newPosition === position || currentHeading
      });
      
      const changeHeading = (toModify.length > 1)
      
      if (changeHeading) {
        toModify.forEach(function(link){
          modifyClass(link, active)
        });
      } else {
        let targetHeading = toModify[0];
        containsClass(targetHeading, active) ? false : pushClass(targetHeading, active);
      }
    };
    
    window.addEventListener('scroll', function(e) {
      // this.setTimeout(function(){
      let position = window.scrollY;
      let active = closestInt(position, flatPositions);
      activeHeading(active);
      // }, 1500)
    });


  }

  elems('p').forEach(function(paragraph) {
    let pkids = paragraph.children
    let pparent = paragraph.parentNode
    if(pkids.length === 1 && pkids[0].matches('.button')) {
      pparent.insertBefore(pkids[0], paragraph);
      paragraph.classList.add('empty');
    }
    let hasTextContent = paragraph.textContent.trim().length > 1
    let isempty = paragraph.children.length < 1 && !hasTextContent

    isempty ? paragraph.classList.add('empty') : false;

  });

  (function goBack() {
    let backBtn = elem('.btn_back');
    let history = window.history;
    if (backBtn) {
      backBtn.addEventListener('click', function(){
        history.back();
      });
    }
  })();

  (function showFounderBio(){
    const trigger = 'bio_toggle';
    const show = 'bio_show';
    page.addEventListener('click', function(event){
      const target = event.target;
      const isTrigger = containsClass(target, trigger) || target.closest(`.${trigger}`);
      const bios = elems('.bio');
      if(isTrigger && bios) {
        event.preventDefault();
        bios.forEach(function(bio){
          deleteClass(bio, show);
        })
        const profile = target.closest('.founder');
        const bio = elem('.bio', profile);
        modifyClass(bio, show);
      } else {
        const bio = elem(`.${show}`);
        const isBio = containsClass(target, show) || target.closest(`.${show}`)
        if (bio && !isBio) {
          deleteClass(bio, show);
        }
      }

    })
  })();

}

window.addEventListener('load', fileClosure());
