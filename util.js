$(document).ready(function () {
  function saveActiveSection(sectionId) {
    localStorage.setItem("activeSection", sectionId);
  }

  function showSection(sectionId) {
    const allSections = [
      "#overview_page",
      "#mtgm_page",
      "#gsvis_page",
      "#gssv1_page",
      "#rour_page",
      "#gsgip_page",
      "#gssv2_page"
    ];
    allSections.forEach(section => {
      if (section === sectionId) {
        $(section).fadeIn(500);
      } else {
        $(section).hide();
      }
    });
    saveActiveSection(sectionId);
  }

  function highlightButton(buttonClass) {
    const allButtons = [
      ".overview-button",
      ".u-24-mtgm-button",
      ".u-24-gsvis-button",
      ".u-24-gssv-1-button",
      ".s-25-rour-button",
      ".s-25-gsgip-button",
      ".s-25-gssv-2-button"
    ];
    allButtons.forEach(btn => {
      if (btn === buttonClass) {
        $(btn).addClass("link");
      } else {
        $(btn).removeClass("link");
      }
    });
  }

  function renameTab(sectionId) {
    const allSections = [
      "#overview_page",
      "#mtgm_page",
      "#gsvis_page",
      "#gssv1_page",
      "#rour_page",
      "#gsgip_page",
      "#gssv2_page"
    ];
    const sectionTitles = [
      "Overview",
      "Modeling the Game Mathematically",
      "Game-State Visualizer in Scratch",
      "Game-State Simulator V1 in Unity",
      "Revisiting our Underlying Representation",
      "Game Sequence Generator in Python",
      "Game-State Simulator V2 in Unity"
    ];

    allSections.forEach(section => {
      if (section === sectionId) {
        const index = allSections.indexOf(sectionId);
        $("title").text("MoveMaster | " + sectionTitles[index]);
      }
    });
  }

  // Restore saved section on page load or default to overview
  const savedSection = localStorage.getItem("activeSection") || "#overview_page";
  showSection(savedSection);
  renameTab(savedSection);

  // Also restore the correct button highlight
  const sectionToButton = {
    "#overview_page": ".overview-button",
    "#mtgm_page": ".u-24-mtgm-button",
    "#gsvis_page": ".u-24-gsvis-button",
    "#gssv1_page": ".u-24-gssv-1-button",
    "#rour_page": ".s-25-rour-button",
    "#gsgip_page": ".s-25-gsgip-button",
    "#gssv2_page": ".s-25-gssv-2-button"
  };
  highlightButton(sectionToButton[savedSection]);

  // Set up click listeners
  $(".overview-button").click(function () {
    highlightButton(".overview-button");
    showSection("#overview_page");
    renameTab("#overview_page");
  });

  $(".u-24-mtgm-button").click(function () {
    highlightButton(".u-24-mtgm-button");
    showSection("#mtgm_page");
    renameTab("#mtgm_page");
  });

  $(".u-24-gsvis-button").click(function () {
    highlightButton(".u-24-gsvis-button");
    showSection("#gsvis_page");
    renameTab("#gsvis_page");
  });

  $(".u-24-gssv-1-button").click(function () {
    highlightButton(".u-24-gssv-1-button");
    showSection("#gssv1_page");
    renameTab("#gssv1_page");
  });

  $(".s-25-rour-button").click(function () {
    highlightButton(".s-25-rour-button");
    showSection("#rour_page");
    renameTab("#rour_page");
  });

  $(".s-25-gsgip-button").click(function () {
    highlightButton(".s-25-gsgip-button");
    showSection("#gsgip_page");
    renameTab("#gsgip_page");
  });

  $(".s-25-gssv-2-button").click(function () {
    highlightButton(".s-25-gssv-2-button");
    showSection("#gssv2_page");
    renameTab("#gssv2_page");
  });
});
