import Button from "components/buttons";
import DashboardPage from "components/dashboard-page";
import { DashCard, Icon, TrendingPages, TrendingPagesListItem } from "components/dashboard-page/elements";
import Badge from "components/topography/badge";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Link from 'next/link';
import { FaRegUser } from "react-icons/fa";
import { RiAppsLine, RiArticleLine } from 'react-icons/ri';
import { TbBrandGoogleAnalytics, TbTools } from "react-icons/tb";

import axios from "axios";
import useSWR from "swr";


const fetchData = async (url, data) => {
    const response = await axios.post(url, data);
    return response.data;
};
const fetcher = url => axios.get(url).then(res => res.data)

export default function Dashboard({ user }) {

    const { data, error, isLoading} = useSWR('/api/admin/dashboard/stats', fetcher)

    if(error)
        console.log(pageError); 


    return (
        <>
            <Head>
                <title>Admin Dashboard</title>
            </Head>
            <DashboardPage user={user}>
                <div className="d-flex justify-content-start g-3 align-items-center my-2 flex-wrap">
                    <DashCard as={Link} href="/dashboard/admin/users">
                        <div>
                            <span>Total Users</span>
                            <h2>{data ? data.stats?.users :0}</h2>
                            {/* <span> Registered yet</span> */}
                        </div>
                        <Icon>
                            <FaRegUser />
                        </Icon>
                    </DashCard>
                    <DashCard as={Link} href="/dashboard/admin/blog">
                        <div>
                            <span>Total Posts</span>
                            <h2>{data ? data?.stats?.posts :0}</h2>
                            {/* <span> Created yet</span> */}
                        </div>
                        <Icon>
                            <RiArticleLine />
                        </Icon>
                    </DashCard>
                    <DashCard as={Link} href="/dashboard/admin/apps">
                        <div>
                            <span>Total Apps</span>
                            <h2>{data ? data?.stats?.apps :0}</h2>
                            {/* <span> Created yet</span> */}
                        </div>
                        <Icon>
                            <RiAppsLine />
                        </Icon>
                    </DashCard>
                    <DashCard as={Link} href="/dashboard/admin/tools">
                        <div>
                            <span>Total Tools</span>
                            <h2>{data ? data?.stats?.tools :0}</h2>
                            {/* <span> Created yet</span> */}
                        </div>
                        <Icon>
                            <TbTools />
                        </Icon>
                    </DashCard>
                    <DashCard as={Link} href="/dashboard/admin/analytics">
                        <div>
                            <span>Total Activities</span>
                            <h2>{data ? data?.stats?.pages:0}</h2>
                        </div>
                        <Icon>
                            <TbBrandGoogleAnalytics />
                        </Icon>
                    </DashCard>
                </div>
                <div className="d-flex align-items-center justify-content-between g-2 flex-wrap">

                   <Trending/>
                </div>
            </DashboardPage>
        </>
    )
}
const Trending = () => {
    const { data, error, isLoading} = useSWR(['/api/admin/trending-pages', { limit: 15,period:"daily" }], ([url, data]) => fetchData(url, data))

    return ( <TrendingPages>
        <div className="Header">
            <h5>Trending Pages  </h5>
            <Button size="sm" low="true" level="true" as={Link} nature="theme" href="/dashboard/admin/analytics/pages">View All</Button>
        </div>
            <div className="d-flex flex-column Body">
            {error? error :null}
            {isLoading? "Loading..." :null}
            {
                data && data.trendingPages.length > 0 ?
                data.trendingPages.map((page,index) => {
                    return (
                        <TrendingPagesListItem key={index}>
                            <div className="metadata">
                            <p>
                                <Link href={`/dashboard/admin/analytics/pages/${page._id}`} className="title">{page.title}</Link>

                                <Badge nature="secondary" rounded="true" className="type">
                                    {page.type}
                                </Badge>
                            </p>
                                <Link className="slug" href={process.env.NEXT_PUBLIC_WEBSITE_URL+page.slug} target="_blank">{page.slug}</Link>
                            </div>
                            <Badge rounded="true" nature={page.actionCountDiff > 0 ?"success":"danger"} className="ms-auto">
                                {/* {page.actionCountDiff > 0 ? <MdArrowUpward/>: <MdArrowDownward/>} */}
                                {page.actionCount}
                            </Badge>


                        </TrendingPagesListItem>
                    )

                }) :"No Data found..."}
              
              </div>
        </TrendingPages>  )
}

export async function getServerSideProps(context) {


    const session = await getSession(context);

    if (!session)
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }

    if (session.user.role !== 'admin') {
        console.log("You are not admin");
        return {
            redirect: {
                destination: '/dashboard',
                permanent: false
            }
        }
    }


    return {
        props: { user: session.user },
    }
}