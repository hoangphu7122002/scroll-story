import { Card } from "@/components/ui/card";

export const GlobalMapSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-primary text-sm mb-1">Global Map</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Global Meditation Connect
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* World Map SVG */}
          <div className="flex-1">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-auto"
              fill="currentColor"
            >
              <path
                className="text-foreground"
                d="M187,101l-2,3l-1,4l1,3l3,2l4,0l3-2l1-3l-1-4l-2-3l-3-1l-3,1z M222,114l-1,2l0,2l1,2l2,1l2,0l2-1l1-2l0-2l-1-2l-2-1l-2,0l-2,1z M273,95l-3,4l-1,5l2,5l4,3l6,0l4-3l2-5l-1-5l-4-4l-5-1l-4,1z M99,150l-3,4l-2,5l1,6l4,4l6,1l5-3l3-5l-1-6l-3-5l-5-2l-5,1z M150,140l8,1l7-3l4-6l-1-7l-5-6l-8-2l-8,2l-5,6l1,7l4,6l3,2z M78,210l-4,5l-2,7l2,7l5,5l8,1l7-3l4-6l-1-7l-5-6l-7-3l-7,0z M145,195l5,0l5-2l3-4l0-5l-3-5l-5-2l-5,1l-4,4l-1,5l2,5l3,3z M195,185l-4,5l-2,7l2,7l5,5l8,1l7-3l4-6l-1-7l-5-6l-7-3l-7,0z M270,160l4,0l4-2l2-3l0-4l-2-4l-4-2l-4,0l-4,2l-2,4l1,4l2,3l3,2z"
              />
              {/* Simplified world map paths - North America */}
              <path
                className="text-foreground"
                d="M150,80 Q200,60 250,80 Q280,100 270,150 Q260,180 220,200 Q180,210 150,190 Q120,170 130,130 Q140,100 150,80"
              />
              {/* South America */}
              <path
                className="text-foreground"
                d="M220,220 Q250,210 260,250 Q270,300 250,350 Q230,390 200,400 Q170,390 180,340 Q190,280 220,220"
              />
              {/* Europe */}
              <path
                className="text-foreground"
                d="M450,80 Q500,70 530,100 Q550,130 540,160 Q520,180 480,170 Q450,150 450,120 Q450,90 450,80"
              />
              {/* Africa */}
              <path
                className="text-foreground"
                d="M470,200 Q520,190 550,230 Q580,280 560,340 Q530,390 480,400 Q430,390 440,330 Q450,260 470,200"
              />
              {/* Asia */}
              <path
                className="text-foreground"
                d="M580,60 Q680,40 780,80 Q850,120 860,180 Q850,240 780,260 Q700,270 620,240 Q560,200 560,140 Q560,90 580,60"
              />
              {/* Australia */}
              <path
                className="text-foreground"
                d="M780,320 Q840,310 870,350 Q890,390 860,420 Q820,440 770,430 Q730,410 740,370 Q760,330 780,320"
              />
              {/* Thailand marker */}
              <circle cx="720" cy="240" r="6" className="text-primary fill-current" />
            </svg>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-4">
            <Card className="p-6 bg-card border-border">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-1">10,884</div>
              <p className="text-muted-foreground">People have joined us</p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-1">67</div>
              <p className="text-muted-foreground">Countries</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
