import React from 'react';
import { Layout } from '../components';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Layout>
      <div>
        <div className="relative overflow-hidden bg-gray-300">
          <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
            <div className="relative h-full max-w-screen-xl mx-auto" />
          </div>

          <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <div className="max-w-screen-xl px-4 mx-auto sm:px-6" />

            <div className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
              <div className="rounded-lg shadow-md" />
            </div>

            <div className="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
              <div className="text-center">
                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  <span className="text-green-500">Boiler Plate</span>
                  <br className="xl:hidden" />
                  for react and tailwind.
                </h2>
                <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl font-roboto">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
                  <div className="rounded-md shadow">
                    <Link
                      to="/"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-brand-blue hover:bg-red-500 focus:outline-none focus:shadow-outline-red md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </Link>
                  </div>
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                    <Link
                      to="/"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-red-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-500 focus:outline-none focus:shadow-outline-red md:py-4 md:text-lg md:px-10"
                    >
                      View Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
