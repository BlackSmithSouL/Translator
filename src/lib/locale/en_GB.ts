import { Confidence } from "../components";
import { Dictionary } from "../types";

export const en_GB: Dictionary = {
    common: {
        autoTranslate: 'Auto translate',
    },
    components: {
        app: {
            loading: 'Fetching supported languages...',
            error: 'Something went wrong',
            empty: 'No supported language'
        },
        header: {
            github: 'Github',
            discord: 'Discord',
            title: 'Translator ReactJS'
        },
        footer: {
            flatIcons: 'FlatIcons',
            libreTranslate: 'LibreTranslate'
        },
        message: {
            tryAgain: 'Try again'
        },
        confidence: {
            error: 'We could\'t detect the language'
        }
    },
    screens: {
        translator: {
            sourceInputPlaceholder: "Type text here..."
        }
    }
}