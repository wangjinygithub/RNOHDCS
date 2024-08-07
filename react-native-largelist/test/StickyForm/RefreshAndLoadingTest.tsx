import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { NormalHeader } from 'react-native-spring-scrollview/src/NormalHeader';
import { NormalFooter } from 'react-native-spring-scrollview/src/NormalFooter';
import { StickyForm } from 'react-native-largelist';
import { contacts } from '../largelist/DataSource';

export default class RefreshAndLoadingTest extends Component {
    _stickyForm: StickyForm;
    _index = 0;

    state = { data: [contacts[0]], allLoaded: false };
    render() {
        return (
            <TestSuite name="RefreshAndLoadingTest">
                <TestCase
                    modal
                    itShould="RefreshAndLoading: refreshHeader、onRefresh、allLoaded、onLoading、loadingFooter">
                    <View style={{ height: 600, width: 350 }}>
                        <StickyForm
                            ref={ref => (this._stickyForm = ref)}
                            data={this.state.data}
                            heightForSection={() => 40}
                            renderSection={this._renderSection}
                            heightForIndexPath={() => 60}
                            renderIndexPath={this._renderItem}
                            refreshHeader={NormalHeader}
                            onRefresh={this._onRefresh}
                            loadingFooter={NormalFooter}
                            onLoading={this._onLoading}
                            allLoaded={this.state.allLoaded}
                            renderHeader={this._renderHeader}
                            renderFooter={this._renderFooter}
                        />
                    </View>
                </TestCase>
            </TestSuite>
        );
    }
    _renderHeader = () => {
        return (
            <View>
                <TouchableOpacity onPress={() => this._stickyForm.beginRefresh()}>
                    <Text style={styles.header}>I am header. Click to begin refresh</Text>
                </TouchableOpacity>
            </View>
        );
    };

    _renderFooter = () => {
        return (
            <View>
                <View>
                    <Text style={styles.header}>I am Footer</Text>
                </View>
            </View>
        );
    };

    _onRefresh = () => {
        setTimeout(() => {
            this._stickyForm?.endRefresh();
            this._index = 0;
            this.setState({
                data: [contacts[this._index]],
                allLoaded: this._index > 2,
            });
        }, 2000);
    };

    _onLoading = () => {
        setTimeout(() => {
            if (this.state.data.length > 20) return;
            this._stickyForm?.endLoading();
            this.setState(p => ({
                data: p.data.concat(contacts[++this._index]),
                allLoaded: true,
            }));
        }, 2000);
    };

    _renderSection = (section: number) => {
        const contact = this.state.data[section];
        return (
            <View style={styles.section}>
                <TouchableOpacity style={styles.section}>
                    <Text style={styles.sectionText}>{contact.header}</Text>
                </TouchableOpacity>
            </View>
        );
    };

    _renderItem = ({ section: section, row: row }) => {
        const contact = this.state.data[section].items[row];
        return (
            <TouchableOpacity style={styles.row}>
                <View>
                    <Image source={contact.icon} style={styles.image} />
                </View>
                <View style={styles.rContainer}>
                    <Text style={styles.title}>{contact.name}</Text>
                    <Text style={styles.subtitle}>{contact.phone}</Text>
                </View>
            </TouchableOpacity>
        );
    };
}

const styles = StyleSheet.create({
    search: {
        marginTop: 20,
        fontSize: 18,
    },
    section: {
        flex: 1,
        backgroundColor: '#EEE',
        justifyContent: 'center',
    },
    sectionText: {
        fontSize: 20,
        marginLeft: 10,
    },
    header: {
        alignSelf: 'center',
        marginVertical: 30,
    },
    row: { flex: 1, flexDirection: 'row', alignItems: 'center' },
    image: { marginLeft: 16, width: 44, height: 44 },
    rContainer: { marginLeft: 20 },
    title: { fontSize: 18 },
    subtitle: { fontSize: 14, marginTop: 8 },
});
