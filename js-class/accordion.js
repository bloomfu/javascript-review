(() => {
  class Accordion {
    //初期化
    constructor(obj) {
      console.log("obj", obj.hookName);

      const $elm = document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);

      const triggerLen = $trigger.length;
      let index = 0;
      while (index < triggerLen) {
        // classを用いるとき関数を実行するにはthisを用いてclassを指定する
        $trigger[index].addEventListener("click", (e) => this.clickHandler(e));
        index++;
      }
    }

    //クリックしたら実行される処理(class内ではconstを使わない)
    clickHandler(e) {
      e.preventDefault();

      const $target = e.currentTarget;
      // .nextElementSiblingはこの要素の親の子リスト内ですぐ次にある要素を返します。
      const $content = $target.nextElementSibling;

      if ($content.style.display === "block") {
        $content.style.display = "none";
      } else {
        $content.style.display = "block";
      }
    }
  }

  const fuckingAccordion = new Accordion({
    hookName: "#js-faq",
    tagName: "p",
  });

  const dummyAccordion = new Accordion({
    hookName: "#js-accordion",
    tagName: "a",
  });

  const miniAccordion = new Accordion({
    hookName: "#js-accordion-mini",
    tagName: "dt",
  });
})();
