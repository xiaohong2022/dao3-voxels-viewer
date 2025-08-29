JSON.stringify([...document.querySelectorAll("*[class*=terrainPanel_voxel_]")].map(v =>
    [
        (v.children[0].children[2] || v.children[0].children[1]).innerText,
        [[...v.children[0].children[0].children].map(v => {
            return [v.style.backgroundPosition || "", v.style.boxShadow || "", v.style.backgroundColor || ""]

        })]
    ]))


    const map = {};
    for(let name of voxels.VoxelTypes) {
        map[name] = voxels.id(name);
    }
    console.log(JSON.stringify(map))