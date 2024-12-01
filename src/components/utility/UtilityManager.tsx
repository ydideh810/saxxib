import React, { useState } from 'react';
import { ClipboardManager } from './ClipboardManager';
import { OfflineTranslator } from './OfflineTranslator';
import { ExpenseTracker } from './ExpenseTracker';
import { QRCodeTool } from './QRCodeTool';
import { InteractiveMap } from './InteractiveMap';

const UTILITIES = [
  { id: 'clipboard', name: 'CLIPBOARD MANAGER' },
  { id: 'translator', name: 'OFFLINE TRANSLATOR' },
  { id: 'expenses', name: 'EXPENSE TRACKER' },
  { id: 'qrcode', name: 'QR CODE TOOL' },
  { id: 'map', name: 'INTERACTIVE MAP' },
] as const;

export function UtilityManager() {
  const [activeUtil, setActiveUtil] = useState<typeof UTILITIES[number]['id']>('clipboard');

  const renderUtility = () => {
    switch (activeUtil) {
      case 'clipboard':
        return <ClipboardManager />;
      case 'translator':
        return <OfflineTranslator />;
      case 'expenses':
        return <ExpenseTracker />;
      case 'qrcode':
        return <QRCodeTool />;
      case 'map':
        return <InteractiveMap />;
      default:
        return null;
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-nowrap overflow-x-auto pb-2 -mx-2 px-2 mb-4 scrollbar-thin">
        {UTILITIES.map((util) => (
          <button
            key={util.id}
            onClick={() => setActiveUtil(util.id)}
            className={`
              terminal-button px-3 py-1 text-[8px] md:text-[10px] whitespace-nowrap
              flex-shrink-0 mr-2 last:mr-0
              ${activeUtil === util.id ? 'bg-[#00ff9d]/20' : ''}
            `}
          >
            {util.name}
          </button>
        ))}
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto">
        {renderUtility()}
      </div>
    </div>
  );
}