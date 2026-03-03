import React, { useEffect } from 'react';
import { Command } from 'cmdk';

interface CommandPaletteProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ open, setOpen }) => {
    // Toggle the menu when ⌘K is pressed
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen(!open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, [open, setOpen]);

    return (
        <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Global Command Menu"
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-surface border border-border shadow-2xl rounded-xl overflow-hidden z-[100]"
        >
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-text-primary/10 backdrop-blur-sm z-[-1] -m-[5000px]"
                onClick={() => setOpen(false)}
            />

            <div className="flex items-center px-4 border-b border-border">
                <Command.Input
                    placeholder="Search projects, skills, or experiences..."
                    className="w-full bg-transparent p-4 text-text-primary placeholder:text-text-secondary outline-none font-medium"
                />
            </div>

            <Command.List className="p-2 max-h-[300px] overflow-y-auto">
                <Command.Empty className="p-4 text-center text-sm text-text-secondary">No results found.</Command.Empty>

                <Command.Group heading="Navigation" className="px-2 py-1 text-xs font-semibold text-text-secondary/70 uppercase">
                    <Command.Item
                        onSelect={() => {
                            document.getElementById('values')?.scrollIntoView({ behavior: 'smooth' });
                            setOpen(false);
                        }}
                        className="flex items-center px-3 py-2 mt-1 text-sm text-text-primary rounded-md cursor-pointer hover:bg-background hover:text-accent transition-colors aria-selected:bg-background aria-selected:text-accent"
                    >
                        Core Competencies
                    </Command.Item>
                    <Command.Item
                        onSelect={() => {
                            document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                            setOpen(false);
                        }}
                        className="flex items-center px-3 py-2 mt-1 text-sm text-text-primary rounded-md cursor-pointer hover:bg-background hover:text-accent transition-colors aria-selected:bg-background aria-selected:text-accent"
                    >
                        AI Products & Tech Explorations
                    </Command.Item>
                    <Command.Item
                        onSelect={() => {
                            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                            setOpen(false);
                        }}
                        className="flex items-center px-3 py-2 mt-1 text-sm text-text-primary rounded-md cursor-pointer hover:bg-background hover:text-accent transition-colors aria-selected:bg-background aria-selected:text-accent"
                    >
                        Enterprise Projects
                    </Command.Item>
                    <Command.Item
                        onSelect={() => {
                            document.getElementById('career')?.scrollIntoView({ behavior: 'smooth' });
                            setOpen(false);
                        }}
                        className="flex items-center px-3 py-2 mt-1 text-sm text-text-primary rounded-md cursor-pointer hover:bg-background hover:text-accent transition-colors aria-selected:bg-background aria-selected:text-accent"
                    >
                        Career Trajectory
                    </Command.Item>
                    <Command.Item
                        onSelect={() => {
                            document.getElementById('patents')?.scrollIntoView({ behavior: 'smooth' });
                            setOpen(false);
                        }}
                        className="flex items-center px-3 py-2 mt-1 text-sm text-text-primary rounded-md cursor-pointer hover:bg-background hover:text-accent transition-colors aria-selected:bg-background aria-selected:text-accent"
                    >
                        Patents
                    </Command.Item>
                    <Command.Item
                        onSelect={() => {
                            document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
                            setOpen(false);
                        }}
                        className="flex items-center px-3 py-2 mt-1 text-sm text-text-primary rounded-md cursor-pointer hover:bg-background hover:text-accent transition-colors aria-selected:bg-background aria-selected:text-accent"
                    >
                        Certifications
                    </Command.Item>
                    <Command.Item
                        onSelect={() => {
                            document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' });
                            setOpen(false);
                        }}
                        className="flex items-center px-3 py-2 mt-1 text-sm text-text-primary rounded-md cursor-pointer hover:bg-background hover:text-accent transition-colors aria-selected:bg-background aria-selected:text-accent"
                    >
                        Tech Radar & Beyond Code
                    </Command.Item>
                </Command.Group>
            </Command.List>
        </Command.Dialog>
    );
};
