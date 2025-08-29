function repeat4Animation6FaceVoxel(x, y, shadow = "", color = "initial") {
    return JSON.parse(JSON.stringify(
        new Array(4).fill(0).map((_, i) => {
            return new Array(6).fill([
                `${x - i * 16}px ${y}px`,
                shadow,
                color
            ])
        })
    ))

}

function custom4Animation6FaceVoxelFace(x, y, shadow = "", color = "initial") {
    return [true, x, y, shadow, color]
}
function custom4Animation6FaceVoxel(front, after, under, upper, left, right) {
    const a = (config, index) => {
        if (config[0] != true) return config;
        else return [
            `${config[1] - index * 16}px ${config[2]}px`,
            config[3],
            config[4]
        ]
    }

    return JSON.parse(JSON.stringify(
        new Array(4).fill(0).map((_, i) => {
            return [
                a(front, i),
                a(after, i),
                a(under, i),
                a(upper, i),
                a(left, i),
                a(right, i),
            ]
        })
    ))
}



export const voxelsTextureInfo = [
    [
        "地形",
        [
            [
                "snow_grass",
                [
                    [
                        [
                            "-224px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -224px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "snow_land",
                [
                    [
                        [
                            "-272px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -224px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "withered_grass_land",
                [
                    [
                        [
                            "-320px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -224px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "withered_grass",
                [
                    [
                        [
                            "-368px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -224px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "orange_grass",
                [
                    [
                        [
                            "-384px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -224px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "orange_grass_all",
                [
                    [
                        [
                            "-432px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -224px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "purple_grass",
                [
                    [
                        [
                            "-480px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -224px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "purple_grass_all",
                [
                    [
                        [
                            "-16px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -240px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "blue_grass",
                [
                    [
                        [
                            "-32px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -240px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "blue_grass_all",
                [
                    [
                        [
                            "-80px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -240px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "pink_grass",
                [
                    [
                        [
                            "-128px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -240px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "pink_grass_all",
                [
                    [
                        [
                            "-176px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -240px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "light_blue_grass",
                [
                    [
                        [
                            "-224px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -240px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "light_blue_grass_all",
                [
                    [
                        [
                            "-272px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -240px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "light_purple_grass_",
                [
                    [
                        [
                            "-320px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -240px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "light_purple_grass_all",
                [
                    [
                        [
                            "-368px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -240px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_red_grass",
                [
                    [
                        [
                            "-416px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -240px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_red_grass_all",
                [
                    [
                        [
                            "-464px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -240px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -240px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_yellow_grass",
                [
                    [
                        [
                            "0px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -256px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_yellow_grass_all",
                [
                    [
                        [
                            "-48px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -256px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_blue_grass",
                [
                    [
                        [
                            "-96px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -256px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_blue_grass_all",
                [
                    [
                        [
                            "-144px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -256px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_purple_grass",
                [
                    [
                        [
                            "-192px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -256px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_purple_grass_all",
                [
                    [
                        [
                            "-240px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -256px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "special_grass_01",
                [
                    [
                        [
                            "-288px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -256px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "special_grass_02",
                [
                    [
                        [
                            "-336px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -256px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "special_grass_03",
                [
                    [
                        [
                            "-384px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -256px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "special_grass_04",
                [
                    [
                        [
                            "-432px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -256px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "special_grass_05",
                [
                    [
                        [
                            "-480px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -256px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -256px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "special_grass_06",
                [
                    [
                        [
                            "-16px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -272px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "special_grass_07",
                [
                    [
                        [
                            "-64px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -272px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "special_grass_08",
                [
                    [
                        [
                            "-112px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -272px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "special_grass_09",
                [
                    [
                        [
                            "-144px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -272px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "special_grass_10",
                [
                    [
                        [
                            "-192px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -272px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "special_land_01",
                [
                    [
                        [
                            "-240px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -272px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "grass_sand",
                [
                    [
                        [
                            "-288px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -272px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_grass_sand",
                [
                    [
                        [
                            "-336px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -272px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "light_sand",
                [
                    [
                        [
                            "-384px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -272px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_sand",
                [
                    [
                        [
                            "-432px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -272px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "sand_stones",
                [
                    [
                        [
                            "-480px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -272px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -272px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "light_volcanic_rock",
                [
                    [
                        [
                            "-16px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -288px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_volcanic_rock",
                [
                    [
                        [
                            "-64px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -288px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "light_dirt",
                [
                    [
                        [
                            "-112px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -288px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "grass_rock",
                [
                    [
                        [
                            "-160px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -288px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "grass_all",
                [
                    [
                        [
                            "-208px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -288px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_grass_rock",
                [
                    [
                        [
                            "-256px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -288px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_grass_all",
                [
                    [
                        [
                            "-304px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -288px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "special_grass_11",
                [
                    [
                        [
                            "-352px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -288px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "special_grass_12",
                [
                    [
                        [
                            "-400px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -288px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "special_grass_13",
                [
                    [
                        [
                            "-448px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -288px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "special_grass_14",
                [
                    [
                        [
                            "-496px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -288px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -288px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "special_grass_15",
                [
                    [
                        [
                            "-32px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -304px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "special_grass_16",
                [
                    [
                        [
                            "-80px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -304px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "special_sand_01",
                [
                    [
                        [
                            "-128px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -304px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "special_sand_02",
                [
                    [
                        [
                            "-176px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -304px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "special_sand_03",
                [
                    [
                        [
                            "-224px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -304px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "special_sand_04",
                [
                    [
                        [
                            "-272px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -304px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "special_sand_05",
                [
                    [
                        [
                            "-320px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -304px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -304px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ]
        ]
    ],
    [
        "自然",
        [
            [
                "dirt",
                [
                    [
                        [
                            "-144px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "grass",
                [
                    [
                        [
                            "-192px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "stone",
                [
                    [
                        [
                            "-240px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "green_leaf",
                [
                    [
                        [
                            "-256px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "acacia",
                [
                    [
                        [
                            "-272px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "sand",
                [
                    [
                        [
                            "-320px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "snow",
                [
                    [
                        [
                            "-112px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "leaf_01",
                [
                    [
                        [
                            "-304px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "leaf_02",
                [
                    [
                        [
                            "-320px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "wood",
                [
                    [
                        [
                            "-352px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_grass",
                [
                    [
                        [
                            "-400px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -112px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_stone",
                [
                    [
                        [
                            "-64px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -128px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "snowland",
                [
                    [
                        [
                            "-288px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -128px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "polar_region",
                [
                    [
                        [
                            "-336px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -128px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "polar_ice",
                [
                    [
                        [
                            "-384px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -128px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "blue_surface_01",
                [
                    [
                        [
                            "-432px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -128px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "blue_surface_02",
                [
                    [
                        [
                            "-480px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -128px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "purple_surface_01",
                [
                    [
                        [
                            "-16px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "purple_surface_02",
                [
                    [
                        [
                            "-64px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_surface",
                [
                    [
                        [
                            "-112px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "rock",
                [
                    [
                        [
                            "-160px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "water",
                [
                    [
                        [
                            "",
                            "",
                            "rgba(25, 204, 255, 0.2)"
                        ],
                        [
                            "",
                            "",
                            "rgba(25, 204, 255, 0.2)"
                        ],
                        [
                            "",
                            "",
                            "rgba(25, 204, 255, 0.2)"
                        ],
                        [
                            "",
                            "",
                            "rgba(25, 204, 255, 0.2)"
                        ],
                        [
                            "",
                            "",
                            "rgba(25, 204, 255, 0.2)"
                        ],
                        [
                            "",
                            "",
                            "rgba(25, 204, 255, 0.2)"
                        ]
                    ]
                ]
            ],
            [
                "ice",
                [
                    [
                        [
                            "-496px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lava01",
                custom4Animation6FaceVoxel(
                    custom4Animation6FaceVoxelFace(0, 0, "rgb(112, 16, 48) 0px 0px 5px", "initial"),
                    custom4Animation6FaceVoxelFace(0, 0, "rgb(112, 16, 48) 0px 0px 5px", "initial"),
                    custom4Animation6FaceVoxelFace(0, 0, "rgb(112, 16, 48) 0px 0px 5px", "initial"),
                    custom4Animation6FaceVoxelFace(-64, 0, "rgb(112, 16, 48) 0px 0px 5px", "initial"),
                    custom4Animation6FaceVoxelFace(0, 0, "rgb(112, 16, 48) 0px 0px 5px", "initial"),
                    custom4Animation6FaceVoxelFace(0, 0, "rgb(112, 16, 48) 0px 0px 5px", "initial"),
                )
            ],
            [
                "lava02",
                custom4Animation6FaceVoxel(
                    custom4Animation6FaceVoxelFace(-128, 0, "rgb(208, 64, 32) 0px 0px 5px", "initial"),
                    custom4Animation6FaceVoxelFace(-128, 0, "rgb(208, 64, 32) 0px 0px 5px", "initial"),
                    custom4Animation6FaceVoxelFace(-128, 0, "rgb(208, 64, 32) 0px 0px 5px", "initial"),
                    custom4Animation6FaceVoxelFace(-192, 0, "rgb(208, 64, 32) 0px 0px 5px", "initial"),
                    custom4Animation6FaceVoxelFace(-128, 0, "rgb(208, 64, 32) 0px 0px 5px", "initial"),
                    custom4Animation6FaceVoxelFace(-128, 0, "rgb(208, 64, 32) 0px 0px 5px", "initial"),
                )
            ],
            [
                "windygrass",
                custom4Animation6FaceVoxel(
                    [
                        "-192px -64px",
                        "",
                        "initial"
                    ],
                    [
                        "-192px -64px",
                        "",
                        "initial"
                    ],
                    [
                        "-208px -64px",
                        "",
                        "initial"
                    ],
                    custom4Animation6FaceVoxelFace(-256, 0, "", "initial"),
                    [
                        "-192px -64px",
                        "",
                        "initial"
                    ],
                    [
                        "-192px -64px",
                        "",
                        "initial"
                    ]
                )
            ],
            [
                "yellow_grass",
                [
                    [
                        [
                            "-400px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "winter_leaf",
                [
                    [
                        [
                            "-432px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -176px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "leaf_03",
                [
                    [
                        [
                            "-464px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -176px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "leaf_04",
                [
                    [
                        [
                            "-480px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -176px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "leaf_05",
                [
                    [
                        [
                            "-496px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -176px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "honeycomb_01",
                [
                    [
                        [
                            "0px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -192px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "honeycomb_02",
                [
                    [
                        [
                            "-16px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -192px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "white_grass",
                [
                    [
                        [
                            "-32px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -192px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "palm",
                [
                    [
                        [
                            "-64px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -192px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "pumpkin",
                [
                    [
                        [
                            "-96px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -192px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "spiderweb",
                [
                    [
                        [
                            "-144px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -192px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "bear_footprint",
                [
                    [
                        [
                            "-256px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -192px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "bamboo",
                [
                    [
                        [
                            "-496px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -192px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "leaf_06",
                [
                    [
                        [
                            "-464px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "barrier",
                [
                    [
                        [
                            "-208px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -224px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "air",
                [
                    [
                        [
                            "",
                            "",
                            "rgba(0, 0, 0, 0)"
                        ],
                        [
                            "",
                            "",
                            "rgba(0, 0, 0, 0)"
                        ],
                        [
                            "",
                            "",
                            "rgba(0, 0, 0, 0)"
                        ],
                        [
                            "",
                            "",
                            "rgba(0, 0, 0, 0)"
                        ],
                        [
                            "",
                            "",
                            "rgba(0, 0, 0, 0)"
                        ],
                        [
                            "",
                            "",
                            "rgba(0, 0, 0, 0)"
                        ],
                    ]
                ]
            ]
        ]
    ],
    [
        "建筑",
        [
            [
                "stained_glass",
                [
                    [
                        [
                            "-128px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "plank_01",
                [
                    [
                        [
                            "-336px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "plank_02",
                [
                    [
                        [
                            "-352px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "plank_03",
                [
                    [
                        [
                            "-368px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "plank_04",
                [
                    [
                        [
                            "-384px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "ice_brick",
                [
                    [
                        [
                            "-400px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "light_grey_stone_brick",
                [
                    [
                        [
                            "-448px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "grey_stone_brick",
                [
                    [
                        [
                            "-464px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "gold_trim_brick",
                [
                    [
                        [
                            "-480px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "red_brick",
                [
                    [
                        [
                            "-496px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "quartz_brick",
                [
                    [
                        [
                            "0px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lantern_01",
                [
                    [
                        [
                            "-16px -80px",
                            "rgb(240, 192, 144) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-16px -80px",
                            "rgb(240, 192, 144) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-16px -80px",
                            "rgb(240, 192, 144) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-16px -80px",
                            "rgb(240, 192, 144) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-16px -80px",
                            "rgb(240, 192, 144) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-16px -80px",
                            "rgb(240, 192, 144) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lantern_02",
                [
                    [
                        [
                            "-32px -80px",
                            "rgb(240, 240, 240) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-32px -80px",
                            "rgb(240, 240, 240) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-32px -80px",
                            "rgb(240, 240, 240) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-32px -80px",
                            "rgb(240, 240, 240) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-32px -80px",
                            "rgb(240, 240, 240) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-32px -80px",
                            "rgb(240, 240, 240) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "window",
                [
                    [
                        [
                            "-48px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "cross_window",
                [
                    [
                        [
                            "-64px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "geometric_window_01",
                [
                    [
                        [
                            "-80px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "geometric_window_02",
                [
                    [
                        [
                            "-96px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "glass",
                [
                    [
                        [
                            "-128px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "color_glass",
                [
                    [
                        [
                            "-144px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "wooden_box",
                [
                    [
                        [
                            "-192px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board_01",
                [
                    [
                        [
                            "-208px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board_02",
                [
                    [
                        [
                            "-224px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "carpet_01",
                [
                    [
                        [
                            "-320px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "carpet_02",
                [
                    [
                        [
                            "-336px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "carpet_03",
                [
                    [
                        [
                            "-352px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "carpet_04",
                [
                    [
                        [
                            "-368px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "carpet_05",
                [
                    [
                        [
                            "-384px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "carpet_06",
                [
                    [
                        [
                            "-400px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "carpet_07",
                [
                    [
                        [
                            "-416px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "palace_eaves_01",
                [
                    [
                        [
                            "-432px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "palace_eaves_02",
                [
                    [
                        [
                            "-464px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "palace_eaves_03",
                [
                    [
                        [
                            "-480px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "palace_eaves_04",
                [
                    [
                        [
                            "-496px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "palace_eaves_05",
                [
                    [
                        [
                            "0px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "palace_eaves_06",
                [
                    [
                        [
                            "-16px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "palace_eaves_07",
                [
                    [
                        [
                            "-32px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "palace_eaves_08",
                [
                    [
                        [
                            "-48px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "roof_red",
                [
                    [
                        [
                            "-64px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "roof_purple",
                [
                    [
                        [
                            "-80px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "roof_green",
                [
                    [
                        [
                            "-96px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "roof_blue_04",
                [
                    [
                        [
                            "-112px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "roof_yellow",
                [
                    [
                        [
                            "-128px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "carpet_08",
                [
                    [
                        [
                            "-144px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "carpet_09",
                [
                    [
                        [
                            "-160px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "carpet_10",
                [
                    [
                        [
                            "-176px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "carpet_11",
                [
                    [
                        [
                            "-192px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "carpet_12",
                [
                    [
                        [
                            "-208px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "carpet_13",
                [
                    [
                        [
                            "-224px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "stainless_steel",
                [
                    [
                        [
                            "-240px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "ice_wall",
                [
                    [
                        [
                            "-256px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "palace_roof",
                [
                    [
                        [
                            "-336px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "red_brick_floor",
                [
                    [
                        [
                            "-384px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "red_brick_wall",
                [
                    [
                        [
                            "-400px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "palace_floor",
                [
                    [
                        [
                            "-416px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "palace_carving",
                [
                    [
                        [
                            "-432px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "stone_pillar_03",
                [
                    [
                        [
                            "-448px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "stone_pillar_04",
                [
                    [
                        [
                            "-480px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -96px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -96px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "stone_pillar_05",
                [
                    [
                        [
                            "0px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -112px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "stone_pillar_06",
                [
                    [
                        [
                            "-32px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -112px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "stone_wall",
                [
                    [
                        [
                            "-64px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -112px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "blue_glass",
                [
                    [
                        [
                            "-80px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -112px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "green_glass",
                [
                    [
                        [
                            "-96px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -112px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "black_glass",
                [
                    [
                        [
                            "-288px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -112px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "red_glass",
                [
                    [
                        [
                            "-304px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -112px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "palace_lamp",
                [
                    [
                        [
                            "-320px -112px",
                            "rgb(240, 192, 144) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-320px -112px",
                            "rgb(240, 192, 144) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-320px -112px",
                            "rgb(240, 192, 144) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-320px -112px",
                            "rgb(240, 192, 144) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-320px -112px",
                            "rgb(240, 192, 144) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-320px -112px",
                            "rgb(240, 192, 144) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board_03",
                [
                    [
                        [
                            "-336px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -112px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board_04",
                [
                    [
                        [
                            "-352px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -112px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board_05",
                [
                    [
                        [
                            "-368px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -112px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board_06",
                [
                    [
                        [
                            "-384px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -112px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "greenbelt_L",
                [
                    [
                        [
                            "-448px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -112px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "greenbelt_L1",
                [
                    [
                        [
                            "-496px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -112px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -112px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "stone_brick_01",
                [
                    [
                        [
                            "-32px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -128px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "stone_brick_02",
                [
                    [
                        [
                            "-48px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -128px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_brick_00",
                [
                    [
                        [
                            "-80px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -128px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_brick_01",
                [
                    [
                        [
                            "-96px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -128px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_brick_02",
                [
                    [
                        [
                            "-112px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -128px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "stone_wall_01",
                [
                    [
                        [
                            "-128px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -128px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "palace_cloud",
                [
                    [
                        [
                            "-208px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "crane_roof_01",
                [
                    [
                        [
                            "0px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "crane_roof_02",
                [
                    [
                        [
                            "-16px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "crane_lantern",
                [
                    [
                        [
                            "-32px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "roof_grey",
                [
                    [
                        [
                            "-48px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "palace_window",
                [
                    [
                        [
                            "-64px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "woodstone_12",
                [
                    [
                        [
                            "-80px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board0",
                [
                    [
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board1",
                [
                    [
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board2",
                [
                    [
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board3",
                [
                    [
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board4",
                [
                    [
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board5",
                [
                    [
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board6",
                [
                    [
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board7",
                [
                    [
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board8",
                [
                    [
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board9",
                [
                    [
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board10",
                [
                    [
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board11",
                [
                    [
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board12",
                [
                    [
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board13",
                [
                    [
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board14",
                [
                    [
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board15",
                [
                    [
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "conveyor",
                custom4Animation6FaceVoxel(
                    [
                        "-368px -160px",
                        "",
                        "initial"
                    ],
                    [
                        "-368px -160px",
                        "",
                        "initial"
                    ],
                    [
                        "-384px -160px",
                        "",
                        "initial"
                    ],
                    custom4Animation6FaceVoxelFace(-320, 0, "", "initial"),
                    [
                        "-368px -160px",
                        "",
                        "initial"
                    ],
                    [
                        "-368px -160px",
                        "",
                        "initial"
                    ]
                )
            ],
            [
                "ledfloor01",
                repeat4Animation6FaceVoxel(-384, 0, "rgb(32, 144, 208) 0px 0px 5px", "initial")
            ],
            [
                "ledfloor02",
                repeat4Animation6FaceVoxel(-448, 0, "rgb(48, 0, 160) 0px 0px 5px", "initial")
            ],
            [
                "express_box",
                [
                    [
                        [
                            "-432px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -160px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -160px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "television",
                [
                    [
                        [
                            "0px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -176px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "bookshelf",
                [
                    [
                        [
                            "-48px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -176px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -176px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "bat_window",
                [
                    [
                        [
                            "-160px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -192px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "pumpkin_lantern",
                [
                    [
                        [
                            "-176px -192px",
                            "rgb(192, 128, 32) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-176px -192px",
                            "rgb(192, 128, 32) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-192px -192px",
                            "rgb(192, 128, 32) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -192px",
                            "rgb(192, 128, 32) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-224px -192px",
                            "rgb(192, 128, 32) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-176px -192px",
                            "rgb(192, 128, 32) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "red_gift",
                [
                    [
                        [
                            "-272px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -192px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "blue_gift",
                [
                    [
                        [
                            "-320px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -192px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "snowman_head",
                [
                    [
                        [
                            "-368px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -192px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "snowman_body",
                [
                    [
                        [
                            "-432px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -192px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "star_lamp",
                repeat4Animation6FaceVoxel(0, -16, "rgb(240, 192, 96) 0px 0px 5px", "initial")
            ],
            [
                "snowflake_lamp",
                repeat4Animation6FaceVoxel(-64, -16, "rgb(48, 112, 208) 0px 0px 5px", "initial")
            ],
            [
                "blue_decorative_light",
                repeat4Animation6FaceVoxel(-128, -16, "rgb(0, 144, 224) 0px 0px 5px", "initial")
            ],
            [
                "green_decorative_light",
                repeat4Animation6FaceVoxel(-192, -16, "rgb(48, 176, 48) 0px 0px 5px", "initial")
            ],
            [
                "red_decorative_light",
                repeat4Animation6FaceVoxel(-256, -16, "rgb(208, 48, 16) 0px 0px 5px", "initial")
            ],
            [
                "yellow_decorative_light",
                repeat4Animation6FaceVoxel(-320, -16, "rgb(240, 208, 64) 0px 0px 5px", "initial")
            ],
            [
                "fu",
                [
                    [
                        [
                            "-16px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "traditional_window",
                [
                    [
                        [
                            "-32px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "rainbow_cube",
                repeat4Animation6FaceVoxel(-384, -16, "", "initial")
            ],
            [
                "firecracker",
                custom4Animation6FaceVoxel(
                    custom4Animation6FaceVoxelFace(-448, -16, "", "initial"),
                    custom4Animation6FaceVoxelFace(-448, -16, "", "initial"),
                    custom4Animation6FaceVoxelFace(0, -32, "", "initial"),
                    custom4Animation6FaceVoxelFace(0, -32, "", "initial"),
                    custom4Animation6FaceVoxelFace(-448, -16, "", "initial"),
                    custom4Animation6FaceVoxelFace(-448, -16, "", "initial"),
                )
            ],
            [
                "air_duct",
                [
                    [
                        [
                            "-48px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "button",
                [
                    [
                        [
                            "-64px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "fan",
                custom4Animation6FaceVoxel(
                    custom4Animation6FaceVoxelFace(-64, -32, "", "initial"),
                    custom4Animation6FaceVoxelFace(-64, -32, "", "initial"),
                    custom4Animation6FaceVoxelFace(-64, -32, "", "initial"),
                    custom4Animation6FaceVoxelFace(-64, -32, "", "initial"),
                    [
                        "-160px -32px",
                        "",
                        "initial"
                    ],
                    [
                        "-160px -32px",
                        "",
                        "initial"
                    ]
                )
            ],
            [
                "lab_lamp_01",
                [
                    [
                        [
                            "-96px -208px",
                            "rgb(176, 176, 176) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-96px -208px",
                            "rgb(176, 176, 176) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-96px -208px",
                            "rgb(176, 176, 176) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-96px -208px",
                            "rgb(176, 176, 176) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-96px -208px",
                            "rgb(176, 176, 176) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-96px -208px",
                            "rgb(176, 176, 176) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lab_lamp_02",
                [
                    [
                        [
                            "-112px -208px",
                            "rgb(176, 176, 176) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-112px -208px",
                            "rgb(176, 176, 176) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-112px -208px",
                            "rgb(176, 176, 176) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-112px -208px",
                            "rgb(176, 176, 176) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-112px -208px",
                            "rgb(176, 176, 176) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-112px -208px",
                            "rgb(176, 176, 176) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lab_lamp_03",
                [
                    [
                        [
                            "-128px -208px",
                            "rgb(112, 80, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-128px -208px",
                            "rgb(112, 80, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-128px -208px",
                            "rgb(112, 80, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-128px -208px",
                            "rgb(112, 80, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-128px -208px",
                            "rgb(112, 80, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-128px -208px",
                            "rgb(112, 80, 0) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lab_material_01",
                [
                    [
                        [
                            "-144px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lab_material_02",
                [
                    [
                        [
                            "-160px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lab_material_03",
                [
                    [
                        [
                            "-176px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lab_material_04",
                [
                    [
                        [
                            "-192px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lab_material_05",
                [
                    [
                        [
                            "-208px -208px",
                            "rgb(80, 112, 112) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -208px",
                            "rgb(80, 112, 112) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -208px",
                            "rgb(80, 112, 112) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -208px",
                            "rgb(80, 112, 112) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -208px",
                            "rgb(80, 112, 112) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -208px",
                            "rgb(80, 112, 112) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lab_material_06",
                [
                    [
                        [
                            "-224px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lab_material_07",
                [
                    [
                        [
                            "-240px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lab_material_08",
                [
                    [
                        [
                            "-256px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lab_material_09",
                [
                    [
                        [
                            "-272px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lab_material_10",
                [
                    [
                        [
                            "-288px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lab_material_11",
                [
                    [
                        [
                            "-304px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lab_material_12",
                [
                    [
                        [
                            "-320px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lab_material_13",
                [
                    [
                        [
                            "-336px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lab_material_14",
                [
                    [
                        [
                            "-352px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lab_material_15",
                [
                    [
                        [
                            "-368px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lab_screen",
                [
                    [
                        [
                            "-384px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lab_wire",
                [
                    [
                        [
                            "-416px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "bounce_pad",
                [
                    [
                        [
                            "-448px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "board_07",
                [
                    [
                        [
                            "-480px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "brick_01",
                [
                    [
                        [
                            "-496px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -208px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -208px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "brick_02",
                [
                    [
                        [
                            "0px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -224px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "plank_05",
                [
                    [
                        [
                            "-16px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -224px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "plank_06",
                [
                    [
                        [
                            "-32px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -224px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "plank_07",
                [
                    [
                        [
                            "-48px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -224px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "toolbox",
                [
                    [
                        [
                            "-64px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -224px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "treasure_chest",
                [
                    [
                        [
                            "-128px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-128px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -224px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -224px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ]
        ]
    ],
    [
        "光源",
        [
            [
                "red_light",
                [
                    [
                        [
                            "-112px -112px",
                            "rgb(224, 0, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-112px -112px",
                            "rgb(224, 0, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-112px -112px",
                            "rgb(224, 0, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-112px -112px",
                            "rgb(224, 0, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-112px -112px",
                            "rgb(224, 0, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-112px -112px",
                            "rgb(224, 0, 0) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "orange_light",
                [
                    [
                        [
                            "-128px -112px",
                            "rgb(224, 112, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-128px -112px",
                            "rgb(224, 112, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-128px -112px",
                            "rgb(224, 112, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-128px -112px",
                            "rgb(224, 112, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-128px -112px",
                            "rgb(224, 112, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-128px -112px",
                            "rgb(224, 112, 0) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "yellow_light",
                [
                    [
                        [
                            "-144px -112px",
                            "rgb(240, 224, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-144px -112px",
                            "rgb(240, 224, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-144px -112px",
                            "rgb(240, 224, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-144px -112px",
                            "rgb(240, 224, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-144px -112px",
                            "rgb(240, 224, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-144px -112px",
                            "rgb(240, 224, 0) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "green_light",
                [
                    [
                        [
                            "-160px -112px",
                            "rgb(48, 192, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-160px -112px",
                            "rgb(48, 192, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-160px -112px",
                            "rgb(48, 192, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-160px -112px",
                            "rgb(48, 192, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-160px -112px",
                            "rgb(48, 192, 0) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-160px -112px",
                            "rgb(48, 192, 0) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "indigo_light",
                [
                    [
                        [
                            "-176px -112px",
                            "rgb(64, 240, 240) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-176px -112px",
                            "rgb(64, 240, 240) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-176px -112px",
                            "rgb(64, 240, 240) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-176px -112px",
                            "rgb(64, 240, 240) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-176px -112px",
                            "rgb(64, 240, 240) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-176px -112px",
                            "rgb(64, 240, 240) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "blue_light",
                [
                    [
                        [
                            "-192px -112px",
                            "rgb(48, 80, 144) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-192px -112px",
                            "rgb(48, 80, 144) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-192px -112px",
                            "rgb(48, 80, 144) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-192px -112px",
                            "rgb(48, 80, 144) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-192px -112px",
                            "rgb(48, 80, 144) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-192px -112px",
                            "rgb(48, 80, 144) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "purple",
                [
                    [
                        [
                            "-208px -112px",
                            "rgb(128, 16, 240) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -112px",
                            "rgb(128, 16, 240) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -112px",
                            "rgb(128, 16, 240) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -112px",
                            "rgb(128, 16, 240) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -112px",
                            "rgb(128, 16, 240) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -112px",
                            "rgb(128, 16, 240) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "pink_light",
                [
                    [
                        [
                            "-224px -112px",
                            "rgb(224, 160, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-224px -112px",
                            "rgb(224, 160, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-224px -112px",
                            "rgb(224, 160, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-224px -112px",
                            "rgb(224, 160, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-224px -112px",
                            "rgb(224, 160, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-224px -112px",
                            "rgb(224, 160, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "mint_green_light",
                [
                    [
                        [
                            "-240px -112px",
                            "rgb(144, 224, 192) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-240px -112px",
                            "rgb(144, 224, 192) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-240px -112px",
                            "rgb(144, 224, 192) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-240px -112px",
                            "rgb(144, 224, 192) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-240px -112px",
                            "rgb(144, 224, 192) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-240px -112px",
                            "rgb(144, 224, 192) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "white_light",
                [
                    [
                        [
                            "-256px -112px",
                            "rgb(192, 192, 192) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-256px -112px",
                            "rgb(192, 192, 192) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-256px -112px",
                            "rgb(192, 192, 192) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-256px -112px",
                            "rgb(192, 192, 192) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-256px -112px",
                            "rgb(192, 192, 192) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-256px -112px",
                            "rgb(192, 192, 192) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "warm_yellow_light",
                [
                    [
                        [
                            "-272px -112px",
                            "rgb(224, 192, 144) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-272px -112px",
                            "rgb(224, 192, 144) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-272px -112px",
                            "rgb(224, 192, 144) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-272px -112px",
                            "rgb(224, 192, 144) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-272px -112px",
                            "rgb(224, 192, 144) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-272px -112px",
                            "rgb(224, 192, 144) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ]
        ]
    ],
    [
        "颜色",
        [
            [
                "cadet_blue",
                [
                    [
                        [
                            "-368px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -48px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "sky_blue",
                [
                    [
                        [
                            "-384px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -48px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "powder_blue",
                [
                    [
                        [
                            "-400px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -48px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_gray",
                [
                    [
                        [
                            "-416px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -48px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "light_gray",
                [
                    [
                        [
                            "-432px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -48px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "olive_green",
                [
                    [
                        [
                            "-448px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -48px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "yellow_green",
                [
                    [
                        [
                            "-464px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -48px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "pale_green",
                [
                    [
                        [
                            "-480px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -48px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "red",
                [
                    [
                        [
                            "-496px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -48px",
                            "",
                            "initial"
                        ],
                        [
                            "-496px -48px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_red",
                [
                    [
                        [
                            "0px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "0px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "brick_red",
                [
                    [
                        [
                            "-16px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-16px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "medium_gray",
                [
                    [
                        [
                            "-32px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-32px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_slate_blue",
                [
                    [
                        [
                            "-48px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-48px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "pink",
                [
                    [
                        [
                            "-64px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-64px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "sakura_pink",
                [
                    [
                        [
                            "-80px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-80px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "orange",
                [
                    [
                        [
                            "-96px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-96px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "lemon",
                [
                    [
                        [
                            "-112px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -64px",
                            "",
                            "initial"
                        ],
                        [
                            "-112px -64px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "black",
                [
                    [
                        [
                            "-160px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "white",
                [
                    [
                        [
                            "-176px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "stripe_01",
                [
                    [
                        [
                            "-240px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "stripe_02",
                [
                    [
                        [
                            "-256px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "stripe_03",
                [
                    [
                        [
                            "-272px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "stripe_04",
                [
                    [
                        [
                            "-288px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "stripe_05",
                [
                    [
                        [
                            "-304px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -80px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -80px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "blue",
                [
                    [
                        [
                            "-224px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "turquoise",
                [
                    [
                        [
                            "-240px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_orchid",
                [
                    [
                        [
                            "-256px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "medium_orchid",
                [
                    [
                        [
                            "-272px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "medium_purple",
                [
                    [
                        [
                            "-288px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-288px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "medium_violet_red",
                [
                    [
                        [
                            "-304px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-304px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "maroon",
                [
                    [
                        [
                            "-320px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-320px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "coffee_gray",
                [
                    [
                        [
                            "-336px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-336px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "peru",
                [
                    [
                        [
                            "-352px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-352px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dark_salmon",
                [
                    [
                        [
                            "-368px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-368px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "navajo_white",
                [
                    [
                        [
                            "-384px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-384px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "orange_red",
                [
                    [
                        [
                            "-400px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-400px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "medium_yellow",
                [
                    [
                        [
                            "-416px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-416px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "medium_green",
                [
                    [
                        [
                            "-432px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-432px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "sienna",
                [
                    [
                        [
                            "-448px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-448px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "mint_green",
                [
                    [
                        [
                            "-464px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-464px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "medium_spring_green",
                [
                    [
                        [
                            "-480px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -144px",
                            "",
                            "initial"
                        ],
                        [
                            "-480px -144px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ]
        ]
    ],
    [
        "字母",
        [
            [
                "A",
                [
                    [
                        [
                            "-464px -32px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-464px -32px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-464px -32px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-464px -32px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-464px -32px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-464px -32px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "B",
                [
                    [
                        [
                            "-480px -32px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-480px -32px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-480px -32px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-480px -32px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-480px -32px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-480px -32px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "C",
                [
                    [
                        [
                            "-496px -32px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-496px -32px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-496px -32px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-496px -32px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-496px -32px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-496px -32px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "D",
                [
                    [
                        [
                            "0px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "0px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "0px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "0px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "0px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "0px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "E",
                [
                    [
                        [
                            "-16px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-16px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-16px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-16px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-16px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-16px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "F",
                [
                    [
                        [
                            "-32px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-32px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-32px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-32px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-32px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-32px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "G",
                [
                    [
                        [
                            "-48px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-48px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-48px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-48px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-48px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-48px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "H",
                [
                    [
                        [
                            "-64px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-64px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-64px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-64px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-64px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-64px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "I",
                [
                    [
                        [
                            "-80px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-80px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-80px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-80px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-80px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-80px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "J",
                [
                    [
                        [
                            "-96px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-96px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-96px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-96px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-96px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-96px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "K",
                [
                    [
                        [
                            "-112px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-112px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-112px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-112px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-112px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-112px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "L",
                [
                    [
                        [
                            "-128px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-128px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-128px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-128px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-128px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-128px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "M",
                [
                    [
                        [
                            "-144px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-144px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-144px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-144px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-144px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-144px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "N",
                [
                    [
                        [
                            "-160px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-160px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-160px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-160px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-160px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-160px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "O",
                [
                    [
                        [
                            "-176px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-176px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-176px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-176px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-176px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-176px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "P",
                [
                    [
                        [
                            "-192px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-192px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-192px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-192px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-192px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-192px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "Q",
                [
                    [
                        [
                            "-208px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "R",
                [
                    [
                        [
                            "-224px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-224px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-224px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-224px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-224px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-224px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "S",
                [
                    [
                        [
                            "-240px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-240px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-240px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-240px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-240px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-240px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "T",
                [
                    [
                        [
                            "-256px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-256px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-256px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-256px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-256px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-256px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "U",
                [
                    [
                        [
                            "-272px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-272px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-272px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-272px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-272px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-272px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "V",
                [
                    [
                        [
                            "-288px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-288px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-288px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-288px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-288px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-288px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "W",
                [
                    [
                        [
                            "-304px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-304px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-304px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-304px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-304px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-304px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "X",
                [
                    [
                        [
                            "-320px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-320px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-320px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-320px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-320px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-320px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "Y",
                [
                    [
                        [
                            "-336px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-336px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-336px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-336px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-336px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-336px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "Z",
                [
                    [
                        [
                            "-352px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-352px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-352px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-352px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-352px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-352px -48px",
                            "rgb(48, 192, 208) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ]
        ]
    ],
    [
        "数字",
        [
            [
                "zero",
                [
                    [
                        [
                            "-304px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-304px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-304px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-304px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-304px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-304px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "one",
                [
                    [
                        [
                            "-320px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-320px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-320px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-320px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-320px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-320px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "two",
                [
                    [
                        [
                            "-336px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-336px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-336px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-336px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-336px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-336px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "three",
                [
                    [
                        [
                            "-352px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-352px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-352px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-352px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-352px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-352px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "four",
                [
                    [
                        [
                            "-368px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-368px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-368px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-368px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-368px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-368px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "five",
                [
                    [
                        [
                            "-384px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-384px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-384px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-384px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-384px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-384px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "six",
                [
                    [
                        [
                            "-400px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-400px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-400px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-400px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-400px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-400px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "seven",
                [
                    [
                        [
                            "-416px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-416px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-416px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-416px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-416px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-416px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "eight",
                [
                    [
                        [
                            "-432px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-432px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-432px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-432px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-432px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-432px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "nine",
                [
                    [
                        [
                            "-448px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-448px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-448px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-448px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-448px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-448px -32px",
                            "rgb(224, 176, 16) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ]
        ]
    ],
    [
        "符号",
        [
            [
                "add",
                [
                    [
                        [
                            "-192px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-192px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-192px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-192px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-192px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-192px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "subtract",
                [
                    [
                        [
                            "-208px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "multiply",
                [
                    [
                        [
                            "-224px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-224px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-224px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-224px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-224px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-224px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "divide",
                [
                    [
                        [
                            "-240px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-240px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-240px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-240px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-240px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-240px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "equal",
                [
                    [
                        [
                            "-256px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-256px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-256px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-256px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-256px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-256px -32px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "exclamation_mark",
                [
                    [
                        [
                            "-272px -32px",
                            "rgb(112, 192, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-272px -32px",
                            "rgb(112, 192, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-272px -32px",
                            "rgb(112, 192, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-272px -32px",
                            "rgb(112, 192, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-272px -32px",
                            "rgb(112, 192, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-272px -32px",
                            "rgb(112, 192, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "question_mark",
                [
                    [
                        [
                            "-288px -32px",
                            "rgb(112, 192, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-288px -32px",
                            "rgb(112, 192, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-288px -32px",
                            "rgb(112, 192, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-288px -32px",
                            "rgb(112, 192, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-288px -32px",
                            "rgb(112, 192, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-288px -32px",
                            "rgb(112, 192, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "ampersand",
                [
                    [
                        [
                            "-96px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-96px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-96px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-96px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-96px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-96px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "asterisk",
                [
                    [
                        [
                            "-112px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-112px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-112px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-112px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-112px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-112px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "at",
                [
                    [
                        [
                            "-128px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-128px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-128px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-128px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-128px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-128px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "backslash",
                [
                    [
                        [
                            "-144px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-144px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-144px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-144px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-144px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-144px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "bracket_close",
                [
                    [
                        [
                            "-160px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-160px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-160px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-160px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-160px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-160px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "bracket_open",
                [
                    [
                        [
                            "-176px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-176px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-176px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-176px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-176px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-176px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "caret",
                [
                    [
                        [
                            "-192px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-192px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-192px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-192px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-192px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-192px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "colon",
                [
                    [
                        [
                            "-208px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-208px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "comma",
                [
                    [
                        [
                            "-224px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-224px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-224px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-224px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-224px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-224px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "dollar",
                [
                    [
                        [
                            "-240px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-240px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-240px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-240px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-240px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-240px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "greater_than",
                [
                    [
                        [
                            "-256px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-256px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-256px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-256px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-256px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-256px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "less_than",
                [
                    [
                        [
                            "-272px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-272px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-272px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-272px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-272px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-272px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "paren_open",
                [
                    [
                        [
                            "-288px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-288px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-288px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-288px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-288px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-288px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "paren_close",
                [
                    [
                        [
                            "-304px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-304px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-304px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-304px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-304px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-304px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "percent",
                [
                    [
                        [
                            "-320px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-320px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-320px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-320px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-320px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-320px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "period",
                [
                    [
                        [
                            "-336px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-336px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-336px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-336px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-336px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-336px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "pound",
                [
                    [
                        [
                            "-352px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-352px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-352px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-352px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-352px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-352px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "quotation_mark",
                [
                    [
                        [
                            "-368px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-368px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-368px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-368px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-368px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-368px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "semicolon",
                [
                    [
                        [
                            "-384px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-384px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-384px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-384px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-384px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-384px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "slash",
                [
                    [
                        [
                            "-400px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-400px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-400px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-400px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-400px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-400px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "tilde",
                [
                    [
                        [
                            "-416px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-416px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-416px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-416px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-416px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ],
                        [
                            "-416px -176px",
                            "rgb(240, 112, 48) 0px 0px 5px",
                            "initial"
                        ]
                    ]
                ]
            ]
        ]
    ],
    [
        "食物",
        [
            [
                "pink_cake",
                [
                    [
                        [
                            "-144px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-160px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-176px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-144px -128px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "macaroon",
                [
                    [
                        [
                            "-192px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-208px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-224px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-192px -128px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "biscuit",
                [
                    [
                        [
                            "-240px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-256px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-272px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -128px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -128px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ],
            [
                "strawberry_juice",
                [
                    [
                        [
                            "",
                            "",
                            "rgba(255, 25, 25, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 25, 25, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 25, 25, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 25, 25, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 25, 25, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 25, 25, 0.6)"
                        ]
                    ]
                ]
            ],
            [
                "lime_juice",
                [
                    [
                        [
                            "",
                            "",
                            "rgba(25, 255, 25, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(25, 255, 25, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(25, 255, 25, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(25, 255, 25, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(25, 255, 25, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(25, 255, 25, 0.6)"
                        ]
                    ]
                ]
            ],
            [
                "blueberry_juice",
                [
                    [
                        [
                            "",
                            "",
                            "rgba(25, 25, 255, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(25, 25, 255, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(25, 25, 255, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(25, 25, 255, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(25, 25, 255, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(25, 25, 255, 0.6)"
                        ]
                    ]
                ]
            ],
            [
                "lemon_juice",
                [
                    [
                        [
                            "",
                            "",
                            "rgba(255, 255, 25, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 255, 25, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 255, 25, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 255, 25, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 255, 25, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 255, 25, 0.6)"
                        ]
                    ]
                ]
            ],
            [
                "grape_juice",
                [
                    [
                        [
                            "",
                            "",
                            "rgba(255, 25, 255, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 25, 255, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 25, 255, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 25, 255, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 25, 255, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 25, 255, 0.6)"
                        ]
                    ]
                ]
            ],
            [
                "orange_juice",
                [
                    [
                        [
                            "",
                            "",
                            "rgba(255, 229, 25, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 229, 25, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 229, 25, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 229, 25, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 229, 25, 0.6)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 229, 25, 0.6)"
                        ]
                    ]
                ]
            ],
            [
                "milk",
                [
                    [
                        [
                            "",
                            "",
                            "rgba(255, 255, 255, 0.95)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 255, 255, 0.95)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 255, 255, 0.95)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 255, 255, 0.95)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 255, 255, 0.95)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 255, 255, 0.95)"
                        ]
                    ]
                ]
            ],
            [
                "soy_sauce",
                [
                    [
                        [
                            "",
                            "",
                            "rgba(25, 12, 2, 0.95)"
                        ],
                        [
                            "",
                            "",
                            "rgba(25, 12, 2, 0.95)"
                        ],
                        [
                            "",
                            "",
                            "rgba(25, 12, 2, 0.95)"
                        ],
                        [
                            "",
                            "",
                            "rgba(25, 12, 2, 0.95)"
                        ],
                        [
                            "",
                            "",
                            "rgba(25, 12, 2, 0.95)"
                        ],
                        [
                            "",
                            "",
                            "rgba(25, 12, 2, 0.95)"
                        ]
                    ]
                ]
            ],
            [
                "coffee",
                [
                    [
                        [
                            "",
                            "",
                            "rgba(0, 0, 0, 0.99)"
                        ],
                        [
                            "",
                            "",
                            "rgba(0, 0, 0, 0.99)"
                        ],
                        [
                            "",
                            "",
                            "rgba(0, 0, 0, 0.99)"
                        ],
                        [
                            "",
                            "",
                            "rgba(0, 0, 0, 0.99)"
                        ],
                        [
                            "",
                            "",
                            "rgba(0, 0, 0, 0.99)"
                        ],
                        [
                            "",
                            "",
                            "rgba(0, 0, 0, 0.99)"
                        ]
                    ]
                ]
            ],
            [
                "peach_juice",
                [
                    [
                        [
                            "",
                            "",
                            "rgba(255, 127, 140, 0.498)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 127, 140, 0.498)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 127, 140, 0.498)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 127, 140, 0.498)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 127, 140, 0.498)"
                        ],
                        [
                            "",
                            "",
                            "rgba(255, 127, 140, 0.498)"
                        ]
                    ]
                ]
            ],
            [
                "candy",
                [
                    [
                        [
                            "-240px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -192px",
                            "",
                            "initial"
                        ],
                        [
                            "-240px -192px",
                            "",
                            "initial"
                        ]
                    ]
                ]
            ]
        ]
    ]
]

export const voxelsNameToId = {
    "A": 37,
    "B": 39,
    "C": 41,
    "D": 43,
    "E": 45,
    "F": 47,
    "G": 49,
    "H": 51,
    "I": 53,
    "J": 55,
    "K": 57,
    "L": 59,
    "M": 61,
    "N": 63,
    "O": 65,
    "P": 67,
    "Q": 69,
    "R": 71,
    "S": 73,
    "T": 75,
    "U": 77,
    "V": 79,
    "W": 81,
    "X": 83,
    "Y": 85,
    "Z": 87,
    "acacia": 133,
    "add": 3,
    "air": 0,
    "air_duct": 585,
    "ampersand": 485,
    "asterisk": 487,
    "at": 489,
    "backslash": 491,
    "bamboo": 574,
    "barrier": 650,
    "bat_window": 546,
    "bear_footprint": 553,
    "biscuit": 341,
    "black": 175,
    "black_glass": 302,
    "blue": 363,
    "blue_decorative_light": 566,
    "blue_gift": 557,
    "blue_glass": 276,
    "blue_grass": 669,
    "blue_grass_all": 671,
    "blue_light": 291,
    "blue_surface_01": 349,
    "blue_surface_02": 351,
    "blueberry_juice": 416,
    "board0": 433,
    "board1": 435,
    "board10": 453,
    "board11": 455,
    "board12": 457,
    "board13": 459,
    "board14": 461,
    "board15": 463,
    "board2": 437,
    "board3": 439,
    "board4": 441,
    "board5": 443,
    "board6": 445,
    "board7": 447,
    "board8": 449,
    "board9": 451,
    "board_01": 181,
    "board_02": 183,
    "board_03": 309,
    "board_04": 311,
    "board_05": 313,
    "board_06": 315,
    "board_07": 635,
    "bookshelf": 483,
    "bounce_pad": 631,
    "bracket_close": 493,
    "bracket_open": 495,
    "brick_01": 637,
    "brick_02": 639,
    "brick_red": 109,
    "button": 587,
    "cadet_blue": 89,
    "candy": 551,
    "caret": 497,
    "carpet_01": 195,
    "carpet_02": 197,
    "carpet_03": 199,
    "carpet_04": 201,
    "carpet_05": 203,
    "carpet_06": 205,
    "carpet_07": 207,
    "carpet_08": 235,
    "carpet_09": 237,
    "carpet_10": 239,
    "carpet_11": 241,
    "carpet_12": 243,
    "carpet_13": 245,
    "coffee": 428,
    "coffee_gray": 379,
    "colon": 499,
    "color_glass": 172,
    "comma": 501,
    "conveyor": 471,
    "crane_lantern": 405,
    "crane_roof_01": 401,
    "crane_roof_02": 403,
    "cross_window": 162,
    "dark_blue_grass": 693,
    "dark_blue_grass_all": 695,
    "dark_brick_00": 329,
    "dark_brick_01": 331,
    "dark_brick_02": 333,
    "dark_grass": 317,
    "dark_grass_all": 745,
    "dark_grass_rock": 743,
    "dark_grass_sand": 725,
    "dark_gray": 95,
    "dark_orchid": 369,
    "dark_purple_grass": 697,
    "dark_purple_grass_all": 699,
    "dark_red": 107,
    "dark_red_grass": 685,
    "dark_red_grass_all": 687,
    "dark_salmon": 383,
    "dark_sand": 729,
    "dark_slate_blue": 113,
    "dark_stone": 327,
    "dark_surface": 357,
    "dark_volcanic_rock": 735,
    "dark_yellow_grass": 689,
    "dark_yellow_grass_all": 691,
    "dirt": 125,
    "divide": 9,
    "dollar": 503,
    "eight": 33,
    "equal": 11,
    "exclamation_mark": 13,
    "express_box": 479,
    "fan": 589,
    "firecracker": 582,
    "five": 27,
    "four": 25,
    "fu": 577,
    "geometric_window_01": 164,
    "geometric_window_02": 166,
    "glass": 170,
    "gold_trim_brick": 151,
    "grape_juice": 420,
    "grass": 127,
    "grass_all": 741,
    "grass_rock": 739,
    "grass_sand": 723,
    "greater_than": 505,
    "green_decorative_light": 568,
    "green_glass": 278,
    "green_leaf": 131,
    "green_light": 287,
    "greenbelt_L": 319,
    "greenbelt_L1": 321,
    "grey_stone_brick": 149,
    "honeycomb_01": 535,
    "honeycomb_02": 537,
    "ice": 398,
    "ice_brick": 145,
    "ice_wall": 249,
    "indigo_light": 289,
    "lab_lamp_01": 591,
    "lab_lamp_02": 593,
    "lab_lamp_03": 595,
    "lab_material_01": 597,
    "lab_material_02": 599,
    "lab_material_03": 601,
    "lab_material_04": 603,
    "lab_material_05": 605,
    "lab_material_06": 607,
    "lab_material_07": 609,
    "lab_material_08": 611,
    "lab_material_09": 613,
    "lab_material_10": 615,
    "lab_material_11": 617,
    "lab_material_12": 619,
    "lab_material_13": 621,
    "lab_material_14": 622,
    "lab_material_15": 624,
    "lab_screen": 627,
    "lab_wire": 629,
    "lantern_01": 157,
    "lantern_02": 159,
    "lava01": 465,
    "lava02": 467,
    "leaf_01": 251,
    "leaf_02": 253,
    "leaf_03": 529,
    "leaf_04": 531,
    "leaf_05": 533,
    "leaf_06": 633,
    "ledfloor01": 473,
    "ledfloor02": 475,
    "lemon": 121,
    "lemon_juice": 418,
    "less_than": 507,
    "light_blue_grass": 677,
    "light_blue_grass_all": 679,
    "light_dirt": 737,
    "light_gray": 97,
    "light_grey_stone_brick": 147,
    "light_purple_grass_": 681,
    "light_purple_grass_all": 683,
    "light_sand": 727,
    "light_volcanic_rock": 733,
    "lime_juice": 414,
    "macaroon": 339,
    "maroon": 377,
    "medium_gray": 111,
    "medium_green": 391,
    "medium_orchid": 371,
    "medium_purple": 373,
    "medium_spring_green": 397,
    "medium_violet_red": 375,
    "medium_yellow": 389,
    "milk": 424,
    "mint_green": 395,
    "mint_green_light": 297,
    "multiply": 7,
    "navajo_white": 385,
    "nine": 35,
    "olive_green": 99,
    "one": 19,
    "orange": 119,
    "orange_grass": 661,
    "orange_grass_all": 663,
    "orange_juice": 422,
    "orange_light": 283,
    "orange_red": 387,
    "palace_carving": 264,
    "palace_cloud": 361,
    "palace_eaves_01": 209,
    "palace_eaves_02": 211,
    "palace_eaves_03": 213,
    "palace_eaves_04": 215,
    "palace_eaves_05": 217,
    "palace_eaves_06": 219,
    "palace_eaves_07": 221,
    "palace_eaves_08": 223,
    "palace_floor": 263,
    "palace_lamp": 307,
    "palace_roof": 255,
    "palace_window": 408,
    "pale_green": 103,
    "palm": 541,
    "paren_close": 511,
    "paren_open": 509,
    "peach_juice": 430,
    "percent": 513,
    "period": 515,
    "peru": 381,
    "pink": 115,
    "pink_cake": 337,
    "pink_grass": 673,
    "pink_grass_all": 675,
    "pink_light": 295,
    "plank_01": 137,
    "plank_02": 139,
    "plank_03": 141,
    "plank_04": 143,
    "plank_05": 641,
    "plank_06": 643,
    "plank_07": 645,
    "polar_ice": 347,
    "polar_region": 345,
    "pound": 517,
    "powder_blue": 93,
    "pumpkin": 543,
    "pumpkin_lantern": 549,
    "purple": 293,
    "purple_grass": 665,
    "purple_grass_all": 667,
    "purple_surface_01": 353,
    "purple_surface_02": 355,
    "quartz_brick": 155,
    "question_mark": 15,
    "quotation_mark": 519,
    "rainbow_cube": 581,
    "red": 105,
    "red_brick": 153,
    "red_brick_floor": 259,
    "red_brick_wall": 261,
    "red_decorative_light": 570,
    "red_gift": 555,
    "red_glass": 304,
    "red_light": 281,
    "rock": 359,
    "roof_blue_04": 231,
    "roof_green": 229,
    "roof_grey": 407,
    "roof_purple": 227,
    "roof_red": 225,
    "roof_yellow": 233,
    "sakura_pink": 117,
    "sand": 135,
    "sand_stones": 731,
    "semicolon": 521,
    "seven": 31,
    "sienna": 393,
    "six": 29,
    "sky_blue": 91,
    "slash": 523,
    "snow": 169,
    "snow_grass": 653,
    "snow_land": 655,
    "snowflake_lamp": 565,
    "snowland": 343,
    "snowman_body": 561,
    "snowman_head": 559,
    "soy_sauce": 426,
    "special_grass_01": 701,
    "special_grass_02": 703,
    "special_grass_03": 705,
    "special_grass_04": 707,
    "special_grass_05": 709,
    "special_grass_06": 711,
    "special_grass_07": 713,
    "special_grass_08": 715,
    "special_grass_09": 717,
    "special_grass_10": 719,
    "special_grass_11": 747,
    "special_grass_12": 749,
    "special_grass_13": 751,
    "special_grass_14": 753,
    "special_grass_15": 755,
    "special_grass_16": 757,
    "special_land_01": 721,
    "special_sand_01": 759,
    "special_sand_02": 761,
    "special_sand_03": 763,
    "special_sand_04": 765,
    "special_sand_05": 767,
    "spiderweb": 544,
    "stained_glass": 123,
    "stainless_steel": 247,
    "star_lamp": 562,
    "stone": 129,
    "stone_brick_01": 323,
    "stone_brick_02": 325,
    "stone_pillar_03": 267,
    "stone_pillar_04": 269,
    "stone_pillar_05": 271,
    "stone_pillar_06": 273,
    "stone_wall": 275,
    "stone_wall_01": 335,
    "strawberry_juice": 412,
    "stripe_01": 185,
    "stripe_02": 187,
    "stripe_03": 189,
    "stripe_04": 191,
    "stripe_05": 193,
    "subtract": 5,
    "television": 481,
    "three": 23,
    "tilde": 525,
    "toolbox": 647,
    "traditional_window": 578,
    "treasure_chest": 649,
    "turquoise": 367,
    "two": 21,
    "warm_yellow_light": 301,
    "water": 364,
    "white": 177,
    "white_grass": 539,
    "white_light": 299,
    "window": 160,
    "windygrass": 469,
    "winter_leaf": 527,
    "withered_grass": 659,
    "withered_grass_land": 657,
    "wood": 257,
    "wooden_box": 179,
    "woodstone_12": 411,
    "yellow_decorative_light": 572,
    "yellow_grass": 477,
    "yellow_green": 101,
    "yellow_light": 285,
    "zero": 17
}

export const transparentVoxels = [
    'air',
    'water',
    'ice',
    'spiderweb',
    'bamboo',
    'barrier',

    'window',
    'cross_window',
    'geometric_window_01',
    'geometric_window_02',
    'glass',
    'color_glass',
    'blue_glass',
    'red_glass',
    'green_glass',
    'black_glass',
    'bat_window',
    'star_lamp',
    'blue_decorative_light',
    'red_decorative_light',
    'green_decorative_light',
    'yellow_decorative_light',
    'traditional_window',
    'firecracker',
    'lab_material_14',
    'lab_material_15',

    'strawberry_juice',
    'lime_juice',
    'blueberry_juice',
    'grape_juice',
    'lemon_juice',
    'milk',
    'orange_juice',
    'soy_sauce',
    'coffee',
    'peach_juice',
]

export const lightVoxelsLevel = {
    'lab_lamp_01': 10,
    'lab_lamp_02': 10,
    'lab_lamp_03': 6,
    'lab_material_05': 6,

    'lantern_01': [11, 14],
    'lantern_02': 14,
    'palace_lamp': [11, 14],
    'ledfloor01': [8, 12],
    'ledfloor02': 12,
    'pumpkin_lantern': 11,
    'star_lamp': [11, 14],
    'snowflake_lamp': [6, 12],
    'blue_decorative_light': [8, 13],
    'green_decorative_light': 11.5,
    'red_decorative_light': 12.5,
    'yellow_decorative_light': [12.5, 15],

    'lava01': 6,
    'lava02': 12,

    'red_light': 13,
    'orange_light': [5.5, 13],
    'yellow_light': 14,
    'green_light': 11,
    'indigo_light': 13,
    'blue_light': [2.5, 7],
    'purple': [6.5, 13.5],
    'pink_light': [8.5, 12.5],
    'mint_green_light': [10, 13],
    'white_light': 11,
    'warm_yellow_light': [11, 13],


    'A': 9.6,
    'B': 9.6,
    'C': 9.6,
    'D': 9.6,
    'E': 9.6,
    'F': 9.6,
    'G': 9.6,
    'H': 9.6,
    'I': 9.6,
    'J': 9.6,
    'K': 9.6,
    'L': 9.6,
    'M': 9.6,
    'N': 9.6,
    'O': 9.6,
    'P': 9.6,
    'Q': 9.6,
    'R': 9.6,
    'S': 9.6,
    'T': 9.6,
    'U': 9.6,
    'V': 9.6,
    'W': 9.6,
    'X': 9.6,
    'Y': 9.6,
    'Z': 9.6,

    'zero': [9, 12],
    'one': [9, 12],
    'two': [9, 12],
    'three': [9, 12],
    'four': [9, 12],
    'five': [9, 12],
    'six': [9, 12],
    'seven': [9, 12],
    'eight': [9, 12],
    'nine': [9, 12],


    'add': [6, 14],
    'subtract': [6, 14],
    'multiply': [6, 14],
    'divide': [6, 14],
    'equal': [6, 14],
    'ampersand': [6, 14],
    'asterisk': [6, 14],
    'at': [6, 14],
    'backslash': [6, 14],
    'bracket_close': [6, 14],
    'bracket_open': [6, 14],
    'caret': [6, 14],
    'colon': [6, 14],
    'comma': [6, 14],
    'dollar': [6, 14],
    'greater_than': [6, 14],
    'less_than': [6, 14],
    'paren_open': [6, 14],
    'paren_close': [6, 14],
    'percent': [6, 14],
    'period': [6, 14],
    'pound': [6, 14],
    'quotation_mark': [6, 14],
    'semicolon': [6, 14],
    'slash': [6, 14],
    'tilde': [6, 14],


    'exclamation_mark': [3.5, 11],
    'question_mark': [3.5, 11],
}

export const voxelsFriction = [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 5, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 10, 0, 10, 0, 1, 0, 1, 0, 1, 20, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
export const voxelsVelocity = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
export const voxelsEmissive = [0, 0, 0, 895, 0, 895, 0, 895, 0, 895, 0, 895, 0, 967, 0, 967, 0, 446, 0, 446, 0, 446, 0, 446, 0, 446, 0, 446, 0, 446, 0, 446, 0, 446, 0, 446, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 3523, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2511, 0, 4095, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 126, 0, 239, 0, 195, 0, 4084, 0, 2387, 0, 3864, 0, 3502, 0, 3305, 0, 3276, 0, 2510, 0, 0, 0, 0, 0, 2511, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1638, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 791, 0, 589, 0, 0, 0, 0, 0, 3474, 0, 2563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 895, 0, 895, 0, 895, 0, 895, 0, 895, 0, 895, 0, 895, 0, 895, 0, 895, 0, 895, 0, 895, 0, 895, 0, 895, 0, 895, 0, 895, 0, 895, 0, 895, 0, 895, 0, 895, 0, 895, 0, 895, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 652, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1743, 0, 0, 3443, 3728, 0, 947, 0, 317, 0, 1247, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3003, 0, 3003, 0, 87, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1909, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 529, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

let allVoxelsTemp
export function getAllVoxels() {
    if (!allVoxelsTemp) allVoxelsTemp = voxelsTextureInfo
        .reduce((a, b) => [].concat(a, b[1]), [])
        .sort((a, b) => voxelsNameToId[a[0]] - voxelsNameToId[b[0]]);

    return allVoxelsTemp;
}