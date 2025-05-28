import chefLogo from './assets/chef.webp'


export default function Header(){
    return (
        <nav className="shadow-xl/30 bg-white font-serif flex justify-center items-center border-2 h-25 rounded-b-sm">
            <img className="h-20 w-25" src={chefLogo} />
            <ul>
                <li className="text-2xl font-bold">Chef Mistral</li>
            </ul>
        </nav>
    );
}