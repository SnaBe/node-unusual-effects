module.exports = [
    {
        "rules": {
            "linebreak-style": [
                "error",
                "windows"
            ],
            "quotes": [
                "error",
                "single"
            ],
            "semi": [
                "error",
                "never"
            ],
            "camelcase": [
                "error",
                {
                    "allow": [
                        "standardized_name"
                    ]
                }
            ],
            "eqeqeq": [
                "error"
            ],
            "no-process-env": [
                "off"
            ]
        },
        "ignores": [
            "test/**/*.js",
            "node_modules/",
            "eslint.config.js",
            "resources/**/*.js",
        ]
    }
]