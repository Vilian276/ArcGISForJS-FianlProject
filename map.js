require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Home",
    "esri/widgets/LayerList"
], (esriConfig, WebMap, MapView, ScaleBar, Legend, Home, LayerList) => {

    esriConfig.apiKey = "AAPK620b0cee70ce48c99fc9577ff49c118dgUkDhdBeqioif9u0sPXLgfo4ypzs-znKFKvSDBzK2Ui3WQFCUJji8t3amJoQPSyR";

    const webMap = new WebMap({
        portalItem: {
            id: "232b4d297d054b2a831a3ce629ac8495"
        }
    });

    const view = new MapView({
        container: "viewDiv",
        map: webMap
    });

    const homeBtn = new Home({
        view: view
    });

    view.ui.add(homeBtn, "top-left");

    const legend = new Legend({
        view: view
    })

    view.ui.add(legend, "bottom-left");

    const scaleBar = new ScaleBar({
        view: view,
        unit: "metric",
        style: "ruler"
    });

    view.ui.add(scaleBar, "bottom-right");

    view.ui.add("layerList-btn", "top-right");

    const layerList = new LayerList({
        view: view
    })

    view.ui.add(layerList, "top-right");

    document
        .getElementById("layerList-btn")
        .addEventListener("click", function() {
            toggleButton()
        })

    function toggleButton() {
        const layerListEl = document.getElementsByClassName("esri-layer-list")[0];
        let currentProp = layerListEl.style.getPropertyValue("display");

        layerListEl.style.setProperty("display", currentProp == "block" ? "none" : "block0");
    };

});