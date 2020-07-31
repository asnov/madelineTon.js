declare const global;
import Window from 'window';
const window = new Window();
global.window = window;
global.navigator = window.navigator;
global.atob = window.atob;

import Lite, { ISettings } from './lite';
import Objects from './TL/objects';
import Parser from './TL/parser';
import liteConfig from './config/ton-lite-client-test1.config.json';
import CryptoAsync from './crypto';

describe('class Lite', () => {
    const config = liteConfig;
    const settings: Partial<ISettings> = {
        wssProxies: {
            0: '',
        },
    };
    const lite = new Lite(settings);

    describe('constructor method', () => {

        it('accept parameters correctly', () => {
            expect(lite.settings.wssProxies).toEqual(settings.wssProxies);
        });
        it('filled in this.TLObjects', () => {
            expect(lite.TLObjects instanceof Objects).toBeTrue();
        });
        it('filled in this.TLParser', () => {
            expect(lite.TLParser instanceof Parser).toBeTrue();
        });
        xit('filled in this.config', () => {
            expect(lite.config).toEqual(config);
        });
        it('filled in this.crypto', () => {
            expect(lite.crypto instanceof CryptoAsync).toBeTrue();
        });

    });

    describe('connect method', () => {
        it('', () => {
            lite.connect();
        });
    });

    describe('', () => {
        lite.last();

        lite.getMasterchainInfo();
        lite.requestBlock();
        lite.getVersion();
        lite.getTime();

        lite.methodCall('');
        lite.rldpCall();
        lite.getTL();

        lite._registerBlockId();
        lite._registerMasterchainBlock();
    });

});
