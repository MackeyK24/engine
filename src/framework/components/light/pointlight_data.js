pc.extend(pc.fw, function () {
    function PointLightComponentData() {
        // Serialized
        this.enable = true;
        this.color = "0xffffff";
        this.intensity = 1;
        this.castShadows = false;
        this.attenuationEnd = 10;

        // Non-serialized
        this.light = null;
    };

    PointLightComponentData.extendsFrom(pc.fw.ComponentData);

    return {
        PointLightComponentData: PointLightComponentData
    };
}());
editor.link.addComponentType("pointlight");

editor.link.expose({
    system: "pointlight",
    variable: "enable",
    displayName: "Enable",
    description: "Enable or disable the light",
    type: "boolean",
    defaultValue: true
});

editor.link.expose({
    system: "pointlight",
    variable: "color",
    displayName: "Color",
    description: "Light color",
    type: "rgb",
    defaultValue: "0xffffff"
});

editor.link.expose({
    system: "pointlight",
    variable: "intensity",
    displayName: "Intensity",
    description: "Factors the light color",
    type: "number",
    defaultValue: 1,
    options: {
        min: 0,
        max: 10,
        step: 0.05
    }
});

editor.link.expose({
    system: "pointlight",
    variable: "attenuationEnd",
    displayName: "Attenuation End",
    description: "The distance from the light where its contribution falls to zero",
    type: "number",
    defaultValue: 10,
    options: {
        min: 0
    }
});