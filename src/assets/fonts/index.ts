import {Inter,Playfair_Display} from 'next/font/google';

const inter = Inter({
    preload:true,
    subsets:['latin','latin-ext'],
    variable:'--font-body'
})

const playfair = Playfair_Display({
    preload:true,
    subsets:['latin','latin-ext'],
    variable:'--font-heading',
})

export {inter, playfair}