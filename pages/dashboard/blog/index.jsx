import { signOut } from "next-auth/react";
import { hasToken, getUser } from 'lib/checkUser'



export default function Dashboard({ user }) {




    return (
        <section className="grid h-screen place-items-center">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hello {user?.name}</h2><br />
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">You are an {user?.role} user currently signed in as {user?.email}.</p>
                <button
                    type="button"
                    onClick={() => signOut()}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                    Logout
                </button>
            </div>
        </section>
    )
}


export async function getServerSideProps(context) {

    const token = await hasToken(context.req);

    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }
    const user = await getUser(context.req);




    return {
        props: { user },

    }
}