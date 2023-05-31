import type { T_RegularArticleCard as T } from "@/ts/utils";
import Image from "next/image";
import Link from "next/link";
import { getFormattedReleaseDate } from "@/funcs/getFormattedReleaseDate";

export default function RegularArticleCard({author,category,excerpt,image,release,title,uri}:T){
    return (
        <Link className="flex flex-col-reverse gerid w-full @xs3/blog-cards:px-3 px-1 group grid-cols-[1.2fr_0.8fr] gap-3 items-center @sm3/blog-cards:max-w-7/10 @md1/blog-cards:max-w-9/10 @md5/blog-cards:max-w-full @md/blog-cards:grid " href={uri} >
            <section
                className="@md1/blog-cards:py-2"
            >
                <div className="flex items center justify-between">
                    <span className="border border-brand-coffee/45 rounded  text-xs px-2 py-1" >{category}</span>
                    <time className="text-xs" dateTime={release}>{getFormattedReleaseDate(release)}</time>
                </div>
                <h2
                    className="text-2xl group-hover:text-brand-olive-muted leading-none mt-1.5 font-extrabold text-balance @md1/blog-cards:text-2xl-plus @md5/blog-cards:text-4xl"
                >{title}</h2>
                <p className="text-balance text-sm  @md5/blog-cards:text-base line-clamp-2 text-neutral-500/75 leading-none my-2" dangerouslySetInnerHTML={{__html:excerpt}} />
                <div
                    className="inline-flex gap-1 items-center  @md5/blog-cards:mt-4"
                >
                    <Image
                        className="size-5 rounded-full  @md5/blog-cards:size-7"
                        loading="lazy"
                        {...author.image}
                    />
                    <span className="text-sm  @md5/blog-cards:text-base font-semibold">{author.fullname}</span>
                </div>
            </section>
            <Image
                className="aspect-video w-full object-cover rounded"
                loading="lazy"
                {...image}
            />
        </Link>
    )
}