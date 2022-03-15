import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, ReplaySubject, Subscription, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

interface WPPostTitle {
    rendered: string;
}

export interface WPTaxonomy {
    id: number;
    description: string;
    name: string;
    language: string;
}

export interface WPPost {
    id: number;
    date: string;
    author: string;
    slug: string;
    type: string;
    link: string;
    title: WPPostTitle;
    excerpt: string;
    content: WPPostTitle;
    image: string;
    image_sm: string;
    image_xs: string;
    _embedded: any;
    show?: any;
    radio?: any;
    categories?: any[];
    tags?: any[];
    language: string;
    translations: {
        el: number;
        en: number;
    };
}

export type WPPostType = 'article' | 'podcast' | 'ondemand' | 'broadcast';
export type WPTaxonomyType = 'show';
export type Article = WPPost;

export interface WPUser {
    id: number;
    name: string;
    url: string;
    description: string;
    link: string;
    slug: string;
    user_cover: any;
}

@Injectable({ providedIn: 'root' })
export class ApiClientService implements OnDestroy {
    private _subscriptions: Subscription[] = [];

    constructor(private httpClient: HttpClient) {
    }

    updatedPosts = new EventEmitter<any>(); 

    public getArticles(params: HttpParams): Observable<Article[]> {
        return this.getPosts<Article>('article', params);
    }

    public getPosts<T extends WPPost>(type: WPPostType, params: HttpParams): Observable<T[]> {
        if (params && params.get('lang') === 'el') {
            params = params.delete('lang');
        }
        return this.httpClient.get<T[]>(`${environment.apiUrl}/wp/v2/${type}`, {
            params: params.set('_embed', '')
        }).pipe(map(posts => posts));
    }

    getPostsByType(type: string, params?: HttpParams): Observable<WPPost[]> {
        if (params && params.get('lang') === 'el') {
            params = params.delete('lang');
        }
        return this.httpClient.get<WPPost[]>(
            `${environment.apiUrl}/wp/v2/${type}`, {
            params: (params ?? new HttpParams()).set('_embed', '')
        }
        ).pipe(map(posts => posts));
    }

    getUser(id: number, language?: string): Observable<WPUser> {
        let params = new HttpParams();
        if (language && language !== 'el') {
            params = params.set('lang', language);
        }
        return this.httpClient.get<WPUser>(`${environment.apiUrl}/wp/v2/users/${id}`, { params });
    }

    ngOnDestroy(): void {
        for (let subscription of this._subscriptions) {
            subscription.unsubscribe();
        }
    }
}
