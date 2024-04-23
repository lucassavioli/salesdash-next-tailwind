import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
export default function Footer() {
  return (
    <footer id="page-footer" className="flex flex-none items-center py-5">
      <div className="container mx-auto flex flex-col px-4 text-center text-sm md:flex-row md:justify-between md:text-start lg:px-8 xl:max-w-7xl">
        <div className="pb-1 pt-4 md:pb-4">
          ©<span className="font-medium"> SalesDash</span>
        </div>
        <div className="gap-2 inline-flex items-center justify-center pb-4 pt-1 md:pt-4">          
          <span>
            <IconBrandGithub size={20} />                                    
          </span>
          <span>
            <IconBrandLinkedin size={20} />                                    
          </span>
        </div>
      </div>
    </footer>
  );
}
