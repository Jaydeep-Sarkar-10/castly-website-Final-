import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import "./button-with-icon.css";

const ButtonWithIconDemo = () => {
  return (
    <Button className="btn-collaborate group">
      <span className="btn-text">
        Let's Collaborate
      </span>
      <div className="btn-icon-circle">
        <ArrowUpRight size={16} />
      </div>
    </Button>
  );
};

export default ButtonWithIconDemo;

