import { Accordion } from "flowbite-react";

export default function Accordionpolo() {
return (



<div className="flex flex-row justify-center mt-12 mb-24">

    <div className="container">

<Accordion collapseAll>

    <Accordion.Panel>
        <Accordion.Title className="text-gray-800 text-2xl">São Paulo</Accordion.Title>
            <Accordion.Content>
                <p className="mb-2 text-gray-800">
                Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                dropdowns, modals, navbars, and more.
                </p>
                <p className="text-gray-800">
                Check out this guide to learn how to&nbsp;
                <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline"
                >
                    get started&nbsp;
                </a>
                and start developing websites even faster with components on top of Tailwind CSS.
                </p>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-gray-800 text-2xl" >Minas Gerais</Accordion.Title>
            <Accordion.Content>
                <p className="mb-2 text-gray-800">
                Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                dropdowns, modals, navbars, and more.
                </p>
                <p className="text-gray-800">
                Check out this guide to learn how to&nbsp;
                <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline"
                >
                    get started&nbsp;
                </a>
                and start developing websites even faster with components on top of Tailwind CSS.
                </p>
            </Accordion.Content>
    </Accordion.Panel>


    <Accordion.Panel>
        <Accordion.Title className="text-gray-800 text-2xl" >Paraná</Accordion.Title>
            <Accordion.Content>
                <p className="mb-2 text-gray-800">
                Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                dropdowns, modals, navbars, and more.
                </p>
                <p className="text-gray-800">
                Check out this guide to learn how to&nbsp;
                <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline"
                >
                    get started&nbsp;
                </a>
                and start developing websites even faster with components on top of Tailwind CSS.
                </p>
            </Accordion.Content>
    </Accordion.Panel>


    <Accordion.Panel>
        <Accordion.Title className="text-gray-800 text-2xl" >Pará</Accordion.Title>
            <Accordion.Content>
                <p className="mb-2 text-gray-800">
                Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                dropdowns, modals, navbars, and more.
                </p>
                <p className="text-gray-800">
                Check out this guide to learn how to&nbsp;
                <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline"
                >
                    get started&nbsp;
                </a>
                and start developing websites even faster with components on top of Tailwind CSS.
                </p>
            </Accordion.Content>
    </Accordion.Panel>

</Accordion>

</div>

</div>

);
}

