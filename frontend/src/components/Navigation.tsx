import {useTranslations} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';
import {Menu} from '..//utils/Menu';

export default function Navigation() {
  const t = useTranslations('Navigation');
  const menuOptions = Menu();

  return (
    <div className="bg-slate-850">
      <nav className="container flex justify-between p-2 text-white">
        <div>
          {menuOptions.map((option, index) => (
            <NavigationLink
              key={index}
              href={option.path}
              className="px-3 py-2 rounded transition-all duration-300 ease-in-out 
                   text-black hover:text-indigo-400"
            >
              {option.item}
            </NavigationLink>
          ))}
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
