'use client'
import type { T_Category } from "@/ts/products-view"
import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function CategoryList({categories}: {categories: Array<T_Category>}){
    const [openKey, setOpenKey] = useState<string | null>(null)
    return (
       <ul className="space-y-2">
            {categories.map((category) => {
                const key = `${category.uri}-${category.label}`
                const isOpen = openKey === key

                return (
                    <li key={key}>
                        <div className="flex items-center gap-2">
                            {category.items?.length ? (
                                <motion.button
                                    type="button"
                                    onClick={() => setOpenKey(isOpen ? null : key)}
                                    animate={{
                                        rotate: isOpen ? 45 : 0,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                    }}
                                    className="size-5 shrink-0 flex items-center justify-center"
                                >
                                    +
                                </motion.button>
                            ) : (
                                <span className="size-5" />
                            )}

                            <Link className="hover:underline" href={`/produkty/${category.uri}`}>
                                {category.label}
                            </Link>
                        </div>
                        <AnimatePresence initial={false}>
                            {isOpen && category.items && (
                                <motion.div
                                    initial={{
                                        height: 0,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        height: "auto",
                                        opacity: 1,
                                    }}
                                    exit={{
                                        height: 0,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut",
                                    }}
                                    className="overflow-hidden"
                                >
                                    <div className="ml-6 mt-2">
                                        <CategoryList
                                            categories={category.items}
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </li>
                )
            })}
        </ul>        
    )
}