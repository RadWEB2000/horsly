import {Inter,Playfair_Display} from 'next/font/google';

const inter = Inter({
    subsets:['latin-ext'],
    variable:'--font-body'
})

const playfair = Playfair_Display({
    subsets:['latin-ext'],
    variable:'--font-heading',
})

export {inter, playfair}