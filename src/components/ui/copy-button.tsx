import {IconCopy} from "@tabler/icons-react";
import {Button} from "@/components/ui/button.tsx";
import {useEffect, useState} from "react";

export interface CopyButtonProps {
  textToCopy: string
}

const CopyButton =(
  ({ textToCopy }: CopyButtonProps) => {
      const [copied, setCopied] = useState(false);

      useEffect(() => {
          if (!copied) {
              return;
          }

          const timeoutId = setTimeout(() => {
            setCopied(false);
          }, 2000);

          return () => clearTimeout(timeoutId);
        }, [copied]);

      const copy = () => {
          navigator.clipboard.writeText(textToCopy)
          setCopied(true)
      }

      return (
          <Button type="button" onClick={copy}>
            <IconCopy stroke={2} />{copied ? "Copied" : "Copy"}
          </Button>
      )
  }
)

export { CopyButton }